import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import FormModal from "../helperComponents/FormModal";
import ApplicationForm from "./ApplicationForm";
import organizationsCardsStyles from "../../styles/organizationCardsStyles";
import {
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Card,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Divider,
} from "@material-ui/core";
import {
  PhoneSharp,
  MailOutlineSharp,
  LocationOnSharp,
  LanguageSharp,
} from "@material-ui/icons/";

export default function OrganizationInfo() {
  const { id } = useParams();
  const classes = organizationsCardsStyles();
  const [organization, setOrganization] = useState({
    name: null, 
    description: null, 
    primary_phone: null, 
    primary_email: null, 
    location: null,
    image_url: null,
    website: null,
    application_config: null
  });

  useEffect(() => {
    axios.get(`/api/organizations/${id}`)
    .then(orgs => setOrganization(orgs.data))
  }, [id]);
  
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={organization.image_url ? organization.image_url : "http://placeimg.com/640/480"}
        />

        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" align="left">
            {organization.name}
          </Typography>
          <Typography component="p" align="left">
            {organization.description}
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
            align="left"
          ></Typography>

          <div className={classes.root}>
            <Divider />
            <List component="nav" aria-label="main mailbox folders">
              <ListItem button>
                <ListItemIcon>
                  <PhoneSharp />
                </ListItemIcon>
                <ListItemText primary={organization.primary_phone} />
              </ListItem>

              <ListItem button>
                <ListItemIcon>
                  <LocationOnSharp />
                </ListItemIcon>
                <ListItemText primary={organization.location} />
              </ListItem>

              <ListItem button>
                <ListItemIcon>
                  <MailOutlineSharp />
                </ListItemIcon>
                <ListItemText primary={organization.primary_email} />
              </ListItem>

              <ListItem button>
                <ListItemIcon>
                  <LanguageSharp />
                </ListItemIcon>
                <ListItemText primary={organization.website} />
              </ListItem>
            </List>
            <Divider />
          </div>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <FormModal 
          data={organization} 
          FormComponent={ApplicationForm}
          details={{task: "Apply to volunteer", description: "Fill in all the fields and submit your application, and the organization will respond as soon as they're able"}}
          >
          Volunteer with {organization.name}
        </FormModal>
      </CardActions>
    </Card>
  );
}

