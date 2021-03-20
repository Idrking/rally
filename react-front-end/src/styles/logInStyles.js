import { makeStyles } from '@material-ui/core/styles';
import { mergeClasses } from '@material-ui/styles';


const logInStyles = makeStyles((theme) => ({
  root: {
    borderColor: "white",
  },
  textField: {
    borderBottom: '2px solid white',
    height: '6vh',
    color: 'white',
    marginTop: '2vh',
    fontSize: '1.4rem'
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit2: {
    marginTop: '5vh',
    marginBottom: '3vh',
    padding: '1rem',
    backgroundColor: '#6D7E73',
    textTransform: 'capitalize',
    fontSize: '1.4rem',
    fontWeight: 300
  },
  
  noAccount: {
    color: '#2B2B2B',
    fontSize: '1.3rem'
  },
  regQuestion2: {
    color: '#CFCFCF',
    fontSize: '1.3rem'
  },
  
}));

export default logInStyles;