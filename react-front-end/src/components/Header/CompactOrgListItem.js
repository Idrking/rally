import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, Typography, Avatar } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';


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
    fontSize: 17,
    alignSelf: "center"
  },
  pos: {
    marginBottom: 12,
  },
  media: {
    width: theme.spacing(8),
    height: theme.spacing(8),
    marginRight: '20px'
  }
}});


const CompactOrgListItem = ({ org, owner }) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
    <Link to={`/organizations/${org.id}/${owner ? 'dashboard' : ''}`}>
      <CardContent className={classes.content}>
        <Avatar
          className={classes.media}
          src={org.image_url}
        />
        <Typography className={classes.title} variant="h3">
          {org.name}
        </Typography>
      </CardContent>
    </Link>
  </Card>
  );
}

export default CompactOrgListItem;


