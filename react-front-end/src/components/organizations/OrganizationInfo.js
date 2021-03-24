import React, { useState, useEffect,  } from "react";
import { useParams, useHistory } from "react-router-dom";
import axios from "axios";
import FormModal from "../helperComponents/FormModal";
import ApplicationForm from "./ApplicationForm";
import AssignmentIndIcon from "@material-ui/icons/AssignmentInd";
import makeModalButton from "../helperComponents/madeModalButton";
import { makeStyles } from "@material-ui/core";
import {
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
  Email,
  LocationOnSharp,
  LanguageSharp,
} from "@material-ui/icons/";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import InfoStyles from "../../styles/InfoStyles";

const useStyles = makeStyles((theme) => ({
  buttons: {
    color: "#fff",
    padding: 10,
    backgroundColor: "#FFA945",
    boxShadow: "none",
    fontSize: 18,
    marginTop: 10
  },
}));

export default function OrganizationInfo() {
  const history = useHistory();
  const { id } = useParams();
  const classes = InfoStyles();
  const buttonClasses = useStyles();
  const [organization, setOrganization] = useState({
    info: {
      name: null,
      description: null,
      primary_phone: null,
      primary_email: null,
      location: null,
      image_url: null,
      website: null,
      application_config: null,
    },
    pending: 0,
  });

  useEffect(() => {
    axios
      .get(`/api/organizations/${id}`)
      .then((orgs) =>
        setOrganization((prev) => {
          return {
            info: orgs.data.info[0] || { ...prev.info },
            pending: orgs.data.pending || 0,
          };
        })
      )
      .catch((err) => console.error(err));
  }, [id]);

  return (
    <div className={classes.root2}>
        <IconButton className={classes.backButton} onClick={() => history.goBack()}>
          <ArrowBackIosIcon style={{ color: "white", fontSize: 30 }} />
        </IconButton>
      <img src={organization.info.image_url} className={classes.bkgImage} alt="background" />
      <Card className={classes.InfoCard2}>
        <CardContent className={classes.CardContent}>
          <section>
            <Typography
              className={classes.cardName}
              color="primary"
              variant="h1"
              component="h2"
              gutterBottom
            >
              {organization.info.name}
            </Typography>
            <Typography
              className={classes.cardSubtitle}
              gutterBottom
              style={{ marginTop: 25 }}
            >
              About Us
            </Typography>
            <Typography variant="body2" component="p">
              {organization.info.description}
            </Typography>

            <Divider style={{ margin: "3vh 0 2vh 0" }} />

            <List component="nav" aria-label="main mailbox folders">
              <ListItem button disableGutters>
                <ListItemIcon>
                  <PhoneSharp className={classes.infoIcons} />
                </ListItemIcon>
                <ListItemText>
                  <Typography className={classes.listItemText}>
                    {organization.info.primary_phone}
                  </Typography>
                </ListItemText>
              </ListItem>

              <ListItem disableGutters>
                <ListItemIcon>
                  <LocationOnSharp className={classes.infoIcons} />
                </ListItemIcon>
                <ListItemText>
                  <Typography className={classes.listItemText}>
                    {organization.info.location}
                  </Typography>
                </ListItemText>
              </ListItem>

              <ListItem button disableGutters>
                <ListItemIcon>
                  <Email className={classes.infoIcons} />
                </ListItemIcon>
                <ListItemText>
                  <Typography className={classes.listItemText}>
                    {organization.info.primary_email}
                  </Typography>
                </ListItemText>
              </ListItem>

              <ListItem disableGutters button component="a" href={organization.info.website}>
                <ListItemIcon>
                  <LanguageSharp className={classes.infoIcons} />
                </ListItemIcon>
                <ListItemText >
                  <Typography className={classes.listItemText}>
                    {organization.info.website}
                  </Typography>
                </ListItemText>
              </ListItem>
            </List>
          </section>

          <Typography variant="body2" style={{ marginTop: 15 }}>
            Interested in volunteering for us?
          </Typography>
          <FormModal
            data={organization.info}
            FormComponent={ApplicationForm}
            details={{
              task: "Apply to volunteer",
              description:
                "Fill in all the fields and submit your application, and the organization will respond as soon as they're able",
            }}
            ModalButton={(onClick) =>
              makeModalButton(
                "Submit Application",
                <AssignmentIndIcon />,
                buttonClasses.buttons,
                onClick
              )
            }
          >
            Submit application
          </FormModal>
        </CardContent>
      </Card>
    </div>
  );
}
