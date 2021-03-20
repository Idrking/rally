import React from 'react';
import { Card, CardContent,  } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import AddCircleIcon from '@material-ui/icons/AddCircle';



const useStyles = makeStyles(theme => {
  return {
  root: {
    minWidth: 275,
  },
  content: {
    display: 'flex'
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    alignSelf: "center"
  },
  pos: {
    marginBottom: 12,
  },
  media: {
    width: theme.spacing(12),
    height: theme.spacing(12),
    marginRight: '20px'
  }
}});


const AddOrgButton = () => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent className={classes.content}>
        <IconButton aria-label="add">
          <AddCircleIcon />
        </IconButton>
      </CardContent>
  </Card>
  );
}

export default AddOrgButton;
