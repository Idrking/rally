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
  const classes = organizationsCardsStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="https://images.ctfassets.net/hrltx12pl8hq/6bi6wKIM5DDM5U1PtGVFcP/1c7fce6de33bb6575548a646ff9b03aa/nature-photography-pictures.jpg?fit=fill&w=800&h=300"
        />

        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" align="left">
            Organization Name
          </Typography>
          <Typography component="p" align="left">
            Andy shoes are designed to keeping in mind durability as well as
            trends, the most stylish range of shoes and sandals
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
                <ListItemText primary="604-333-GABE" />
              </ListItem>

              <ListItem button>
                <ListItemIcon>
                  <LocationOnSharp />
                </ListItemIcon>
                <ListItemText primary="Vancouver BC" />
              </ListItem>

              <ListItem button>
                <ListItemIcon>
                  <MailOutlineSharp />
                </ListItemIcon>
                <ListItemText primary="gabe@lighthouselabs.com" />
              </ListItem>

              <ListItem button>
                <ListItemIcon>
                  <LanguageSharp />
                </ListItemIcon>
                <ListItemText primary="lighthouselabs.com" />
              </ListItem>
            </List>
            <Divider />
          </div>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="medium" color="primary">
          Join
        </Button>
      </CardActions>
    </Card>
  );
}

// https://pnwraptors.com/wp-content/uploads/2020/05/105-18-048-e1589565999168.jpg"
// Wildlife organization dedicated to the conservation of birds of
//             prey. Visitor Centre in Duncan, BC. Bird abatement/wildlife
//             management across Canada.
