import { makeStyles } from '@material-ui/core/styles';


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
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    backgroundColor: theme.palette.primary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit2: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: '#6D7E73',
    color:  "white"
  },
  forgotPassword: {
    color: 'grey',
    fontSize: '1.3rem'
  },
  noAccount: {
    color: '#2B2B2B',
    fontSize: '1.3rem'
  },
  
}));

export default logInStyles;