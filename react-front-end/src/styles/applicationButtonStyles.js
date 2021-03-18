import { makeStyles } from '@material-ui/core/styles';

const applicationButtonStyles = makeStyles({

  accept: {
    maxWidth: 800,
    margin: "auto",
    marginTop: "10px",
    marginRight: "15px",
    fontWeight: 'bold',
    padding: '0.5em',
    color: "#F6F7EB",
    backgroundColor: "#30BCED",
    "&:hover": {
      color: "#30BCED",
      backgroundColor: '#e4f6fd'
    }
  },

  reject: {
    maxWidth: 800,
    margin: "auto",
    marginTop: "10px",
    fontWeight: 'bold',
    padding: '0.5em',
    color: "#F6F7EB",
    backgroundColor: "#942911",
    "&:hover": {
      color: "#942911",
      backgroundColor: '#fce8e3'
    }
  }

});

export default applicationButtonStyles;