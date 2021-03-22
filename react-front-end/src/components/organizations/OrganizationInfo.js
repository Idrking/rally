import React, { useState, useEffect, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import FormModal from "../helperComponents/FormModal";
import ApplicationForm from "./ApplicationForm";
import UserContext from "../../contexts/UserContext";
import organizationsCardsStyles from "../../styles/organizationCardsStyles";
import {

  CardActions,
  CardContent,
  IconButton,
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
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import InfoStyles from "../../styles/InfoStyles";





export default function OrganizationInfo() {
  const { userState } = useContext(UserContext);
  const { id } = useParams();
  const classes = InfoStyles();
  const [organization, setOrganization] = useState({
    info: {
      name: null,
      description: null,
      primary_phone: null,
      primary_email: null,
      location: null,
      image_url: null,
      website: null,
      application_config: null
    }, pending: 0
  });

  useEffect(() => {
    axios.get(`/api/organizations/${id}`)
      .then(orgs => setOrganization(prev => {
        return {
          info: orgs.data.info[0] || { ...prev.info },
          pending: orgs.data.pending || 0
        };
      }))
      .catch(err => console.error(err));
  }, [id]);

  return (
    <div className={classes.root}>
      <Link to={`/users/${userState.id}`}>
        <IconButton className={classes.backButton}>
          <ArrowBackIosIcon style={{ color: "white", fontSize: 30 }} />
        </IconButton>
      </Link>
      <img src={organization.image_url} className={classes.bkgImage}></img>
      <Card className={classes.InfoCard}>

        <CardContent className={classes.CardContent}>
          <section>
            <Typography className={classes.cardName} color="primary" variant="h1" component="h2">
              {organization.info.name}
            </Typography>
            <Typography className={classes.cardSubtitle} gutterBottom>
              About Us
          </Typography>
            <Typography className={classes.description}>
              {organization.info.description}
            </Typography>

            <Divider style={{ margin: "2vh 0" }} />



            <List component="nav" aria-label="main mailbox folders">
              <ListItem button>
                <ListItemIcon>
                  <PhoneSharp className={classes.infoIcons} />
                </ListItemIcon>
                <ListItemText color="primary" secondary={organization.info.primary_phone} />
              </ListItem>

              <ListItem button>
                <ListItemIcon>
                  <LocationOnSharp className={classes.infoIcons} />
                </ListItemIcon>
                <ListItemText color="primary" secondary={organization.info.location} />
              </ListItem>

              <ListItem button>
                <ListItemIcon>
                  <MailOutlineSharp className={classes.infoIcons} />
                </ListItemIcon>
                <ListItemText color="primary" secondary={organization.info.primary_email} />
              </ListItem>

              <ListItem button>
                <ListItemIcon>
                  <LanguageSharp className={classes.infoIcons} />
                </ListItemIcon>
                <ListItemText color="primary" secondary={organization.info.website} />
              </ListItem>
            </List>
            <Divider />
          
            </section>
        </CardContent>
      </Card>
        <CardActions>
          <FormModal className={classes.buttonRound}
            data={organization.info}
            FormComponent={ApplicationForm}
            details={{ task: "Apply to volunteer", description: "Fill in all the fields and submit your application, and the organization will respond as soon as they're able" }}
          >
            Interested In Volunteering {organization.info.name}
          </FormModal>
        </CardActions>
    
    </div>
  );
}

