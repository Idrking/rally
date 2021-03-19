import { makeStyles } from "@material-ui/core/styles";

const registerStyles = makeStyles((theme) => ({
  root: {
    borderColor: "white",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
  },
  textField: {
    borderBottom: '2px solid white'
  },
  inputBase: {
    borderBottom: '2px solid white',
    height: '6vh',
    color: 'white',
    marginTop: '2vh',
    fontSize: '1.4rem'
  },
  submit: {
    marginTop: '6vh',
    marginBottom: '3vh',
    padding: '1rem',
    color: 'white',
    backgroundColor: '#2B2B2B',
    textTransform: 'capitalize',
    fontSize: '1.4rem',
    fontWeight: 300
  },

  regQuestion: {
    color: 'white',
    fontSize: '1.3rem'
  }
}));

export default registerStyles;
