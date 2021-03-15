import React from "react";
import organizationsCardsStyles from "../styles/organizationCardsStyles";
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
          <Typography gutterBottom variant="h5" component="h2">
            {details.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
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

// https://pnwraptors.com/wp-content/uploads/2020/05/105-18-048-e1589565999168.jpg"
// Wildlife organization dedicated to the conservation of birds of
//             prey. Visitor Centre in Duncan, BC. Bird abatement/wildlife
//             management across Canada.