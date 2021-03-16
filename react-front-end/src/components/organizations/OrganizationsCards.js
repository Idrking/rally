import React from "react";
import organizationsCardsStyles from "../../styles/organizationCardsStyles";
import {
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Card,
} from "@material-ui/core";

export default function OrganizationsCards({ details }) {
  const classes = organizationsCardsStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={details.image_url}
          title={details.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" align="left">
            {details.name}
          </Typography>
          <Typography color="primary" component="h3" align="left">
            {details.location}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p" align="left">
            {details.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="medium" color="primary">
          Join
        </Button>
        <Button target="_blank" href={details.website} size="medium" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}
