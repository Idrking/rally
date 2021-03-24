import React from "react";
import organizationsCardsStyles from "../../styles/organizationCardsStyles";
import {
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  Card,
} from "@material-ui/core";

export default function OrganizationsCards({ details }) {
  const classes = organizationsCardsStyles();

  return (
    <Card className={classes.root2}>
      <CardActionArea href={`/organizations/${details.id}`}>
        <section className={classes.cardgrid}>
          <div className={classes.cardorggrid}>
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
          </div>
          <CardMedia
            className={classes.media2}
            image={details.image_url}
            title={details.name}
          />
        </section>
      </CardActionArea>
    </Card>
  );
}
