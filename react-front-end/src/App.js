import Axios from "axios";
import React, { useState, useEffect } from "react";
import "./App.css";
import MainRouter from "./components/routers/MainRouter";
import UserContext from "./contexts/UserContext";

export default function App() {
  const [userState, setUserState] = useState({
    id: null,
    name: null,
    profile_image: null,
  });
  useEffect(() => {
    Axios.get("/api/login/authenticate")
      .then((res) => {
        setUserState({
          id: res.data.id,
          name: res.data.name,
          profile_image: res.data.profile_image,
        });
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <UserContext.Provider value={{ userState, setUserState }}>
      <div className="App">
        <MainRouter />
      </div>
    </UserContext.Provider>
  );
}
