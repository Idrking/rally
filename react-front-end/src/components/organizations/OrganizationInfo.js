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
  Button,
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
      <Link to={`/users/${userState.id}`}>
        <IconButton className={classes.backButton}>
          <ArrowBackIosIcon style={{ color: "white", fontSize: 30 }} />
        </IconButton>
      </Link>
      <img src="{organization.image_url}" className={classes.bkgImage}></img>
      <Card className={classes.InfoCard2}>
        <CardContent className={classes.CardContent}>
          <section>
            <Typography
              className={classes.cardName}
              color="primary"
              variant="h1"
              component="h2"
            >
              {organization.info.name}
            </Typography>
            <Typography className={classes.cardSubtitle} gutterBottom>
              About Us
            </Typography>
            <Typography className={classes.description}>
              {organization.info.description}
              Git Fetch | Atlassian Git Tutorialwww.atlassian.com › git ›
              tutorials › syncing › git-fetch In review, git fetch is a primary
              command used to download contents from a remote repository. git
              fetch is used in conjunction with git remote , git branch , git
              checkout , and git reset to update a local repository to the state
              of a remote. The git fetch command is a critical piece of
              collaborative git work flows. What's the difference between "git
              fetch" and "git pull"? | Learn ...www.git-tower.com › learn › git
              › faq › difference-bet... Git Fetch | Atlassian Git
              Tutorialwww.atlassian.com › git › tutorials › syncing › git-fetch
              In review, git fetch is a primary command used to download
              contents from a remote repository. git fetch is used in
              conjunction with git remote , git branch , git checkout , and git
              reset to update a local repository to the state of a remote. The
              git fetch command is a critical piece of collaborative git work
              flows. What's the difference between "git fetch" and "git pull"? |
              Learn ...www.git-tower.com › learn › git › faq › difference-bet...
              git fetch really only downloads new data from a remote repository
              - but it doesn't integrate any of this new data into your working
              files. Fetch is great for getting a ... Git Fetch | Atlassian Git
              Tutorialwww.atlassian.com › git › tutorials › syncing › git-fetch
              In review, git fetch is a primary command used to download
              contents from a remote repository. git fetch is used in
              conjunction with git remote , git branch , git checkout , and git
              reset to update a local repository to the state of a remote. The
              git fetch command is a critical piece of collaborative git work
              flows. What's the difference between "git fetch" and "git pull"? |
              Learn ...www.git-tower.com › learn › git › faq › difference-bet...
              git fetch really only downloads new data from a remote repository
              - but it doesn't integrate any of this new data into your working
              files. Fetch is great for getting a ... git fetch really only
              downloads new data from a remote repository - but it doesn't
              integrate any of this new data into your working files. Fetch is
              great for getting a ...
            </Typography>

            <Divider style={{ margin: "2vh 0" }} />

            <List component="nav" aria-label="main mailbox folders">
              <ListItem button>
                <ListItemIcon>
                  <PhoneSharp className={classes.infoIcons} />
                </ListItemIcon>
                <ListItemText>
                  <Typography className={classes.listItemText}>
                    {organization.info.primary_phone}
                  </Typography>
                </ListItemText>
              </ListItem>

              <ListItem button>
                <ListItemIcon>
                  <LocationOnSharp className={classes.infoIcons} />
                </ListItemIcon>
                <ListItemText>
                  <Typography className={classes.listItemText}>
                    {organization.info.location}
                  </Typography>
                </ListItemText>
              </ListItem>

              <ListItem button>
                <ListItemIcon>
                  <MailOutlineSharp className={classes.infoIcons} />
                </ListItemIcon>
                <ListItemText>
                  <Typography className={classes.listItemText}>
                    {organization.info.primary_email}
                  </Typography>
                </ListItemText>
              </ListItem>

              <ListItem button>
                <ListItemIcon>
                  <LanguageSharp className={classes.infoIcons} />
                </ListItemIcon>
                <ListItemText>
                  <Typography className={classes.listItemText}>
                    {organization.info.website}
                  </Typography>
                </ListItemText>
              </ListItem>
            </List>
            <Divider />
          </section>
          <Button>
            {" "}
            <FormModal
              data={organization.info}
              FormComponent={ApplicationForm}
              details={{
                task: "Apply to volunteer",
                description:
                  "Fill in all the fields and submit your application, and the organization will respond as soon as they're able",
              }}
            >
              Submit application
            </FormModal>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
