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
    <Card className={classes.root2}>
      <section className={classes.cardgrid}>
        <div className={classes.cardorggrid}>
          <CardActionArea href={`/organizations/${details.id}`}>
            <CardContent>
              <Typography
                className={classes.title}
                gutterBottom
                variant="h3"
                component="h2"
                align="left"
              >
                {details.name}
              </Typography>
              <Typography color="primary" variant="body2" align="left">
                {details.location}
              </Typography>
            </CardContent>
          </CardActionArea>

          <CardActions>
            <Button size="medium" color="secondary">
              Join
            </Button>
            <Button
              target="_blank"
              href={details.website}
              size="medium"
              color="primary"
            >
              Learn More
            </Button>
          </CardActions>
        </div>
        <CardMedia
          className={classes.media2}
          image={details.image_url}
          title={details.name}
        />
      </section>
    </Card>
  );
}
