import { makeStyles } from "@material-ui/core/styles";

const logInStyles = makeStyles((theme) => ({
  root: {
    borderColor: "white",
  },
  textField: {
    // marginTop: '2vh',
    // fontSize: '1.4rem'
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit2: {
    marginTop: "5vh",
    marginBottom: "3vh",
    padding: "1rem",
    textTransform: "capitalize",
    fontSize: "1.4rem",
    fontWeight: 300,
    color: "white",
  },

  noAccount: {
    color: "#2B2B2B",
    fontSize: "1.3rem",
  },
  regQuestion2: {
    color: "#CFCFCF",
    fontSize: "1.3rem",
  },
}));

export default logInStyles;
