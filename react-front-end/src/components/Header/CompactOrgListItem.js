import React from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  Typography,
  Avatar,
  Container,
  Divider,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => {
  return {
    root: {
      minWidth: "100vw",
    },
    content: {
      display: "flex",
      border: "none",
    },
    title: {
      fontSize: 15,
      alignSelf: "center",
    },
    pos: {
      marginBottom: 12,
    },
    media: {
      width: theme.spacing(8),
      height: theme.spacing(8),
      marginRight: "20px",
    },
  };
});

const CompactOrgListItem = ({ org, owner }) => {
  const classes = useStyles();

  return (
    <Container maxWidth="sm" className={classes.root}>
      <Link to={`/organizations/${org.id}/${owner ? "dashboard" : ""}`}>
        <section className={classes.content}>
          <Avatar className={classes.media} src={org.image_url} />
          <Typography className={classes.title} variant="h3">
            {org.name}
          </Typography>
        </section>
      </Link>
    </Container>
  );
};

export default CompactOrgListItem;
