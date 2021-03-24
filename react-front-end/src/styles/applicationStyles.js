import { makeStyles } from '@material-ui/core/styles';

const applicationStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
  },

  avatar: {
    alignSelf: "center",
    width: theme.spacing(12),
    height: theme.spacing(12),
  },

  buttonContainer: {
    display: "flex",
    marginTop: "20px",
  },

  accept: {
    maxWidth: 800,
    margin: "auto",
    marginTop: "10px",
    fontWeight: 'bold',
    padding: '0.6em',
    color: "#fff",
    backgroundColor: theme.palette.secondary.main,
    "&:hover": {
      color: theme.palette.accent.main,
      backgroundColor: theme.palette.base.main
    }
  },

  reject: {
    maxWidth: 800,
    margin: "auto",
    marginTop: "10px",
    fontWeight: 'bold',
    padding: '0.6em',
    color: "#fff",
    backgroundColor: theme.palette.primary.main,
    "&:hover": {
      color: theme.palette.primary.main,
      backgroundColor: theme.palette.base.main
    }
  },

  back: {
    maxWidth: 800,
    margin: "auto",
    marginTop: "10px",
    fontWeight: 'bold',
    padding: '0.6em',
    color: "#C4C4C4",
    // border: "2px solid #C4C4C4",
    backgroundColor: "white",
    "&:hover": {
      color: theme.palette.accent.main,
      backgroundColor: theme.palette.base.main
    }
  },

  reject2: {
    maxWidth: 800,
    margin: "auto",
    marginTop: "10px",
    fontWeight: 'bold',
    padding: '0.6em',
    color: "white",
    backgroundColor: "#2B2B2B",
    "&:hover": {
      color: theme.palette.accent.main,
      backgroundColor: theme.palette.base.main
    }
  },
}));

export default applicationStyles;
