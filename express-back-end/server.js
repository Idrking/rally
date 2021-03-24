require("dotenv").config();
const Express = require("express");
const App = Express();
const bodyParser = require("body-parser");
const PORT = 8080;
const cookieSession = require("cookie-session");
const morgan = require("morgan");
const ws = require("ws");

//Importing Routes
const usersRoutes = require("./routes/users");
const orgRoutes = require("./routes/organizations");
const taskRoutes = require("./routes/tasks");
const appUserRoutes = require("./routes/approvedUser");
const ownerRoutes = require("./routes/owners");
const signupRoutes = require("./routes/signups");
const loginRoutes = require("./routes/login");

// Express Configuration
App.use(bodyParser.urlencoded({ extended: false }));
App.use(bodyParser.json());
App.use(Express.static("public"));
App.use(
  cookieSession({
    name: "session",
    keys: [process.env.COOKIE_KEY_ONE, process.env.COOKIE_KEY_TWO],
    maxAge: 24 * 60 * 60 * 1000, //24hours
  })
);
App.use(morgan("dev"));

// PG database client/connection
const { Pool } = require("pg");
const dbParams = require("./lib/db.js");
const db = new Pool(dbParams);
db.connect();

// Mounting route handlers
App.use("/api/users", usersRoutes(db));
App.use("/api/organizations", orgRoutes(db));
App.use("/api/tasks", taskRoutes(db));
App.use("/api/approveduser", appUserRoutes(db));
App.use("/api/owners", ownerRoutes(db));
App.use("/api/signup", signupRoutes(db, updateSignups));
App.use("/api/login", loginRoutes(db));

App.get("*", (req, res) => {
  res.status(404).json({ error: "Resource not found" });
});

const server = App.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server listening on port 8080`);
});

const wss = new ws.Server({ server });

function updateSignups(signup) {
  wss.clients.forEach((client) => {
    if (client.readyState === ws.OPEN) {
      client.send(JSON.stringify(signup));
    }
  });
}
