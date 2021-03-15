import { makeStyles } from '@material-ui/core/styles';



const taskCardStyles = makeStyles({

  root: {
    maxWidth: 800,
    margin: "auto",
    marginTop: "100"
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  
  title: {
    fontSize: 30,
  },

  pos: {
    marginBottom: 12,
  },
});

export default taskCardStyles;