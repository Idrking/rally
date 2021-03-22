import { makeStyles } from "@material-ui/core/styles";
import zIndex from "@material-ui/core/styles/zIndex";
import { Autorenew } from "@material-ui/icons";

const InfoStyles = makeStyles({
  root: {
    backgroundColor: "#94A8A3",
    margin: 0,
    height: "100%",
    width: "100%",
    position: "absolute",
  },
  root2: {
    backgroundColor: "#F5F5F5",
    margin: 0,
    width: "100%",
    height: "100%",
    overflow: "scroll"
  },

  bkgImage: {
    position: "absolute",
    width: "140%",
    opacity: 0.8,
  },

  InfoCard: {
    position: "relative",
    width: "100%",
    height: "60vh",
    top: "30vh",
    margin: "auto 0",
    backgroundColor: "#F5F5F5",
    borderRadius: 52,
    zIndex: 999,
    boxShadow: "none",
  },

  InfoCard2: {
    position: "relative",
    width: "100%",
    top: "30vh",
    margin: "auto 0",
    color: "#F5F5F5",
    borderRadius: 52,
    zIndex: 999,
    boxShadow: "none",


  },

  CardContent: {
    padding: "5vh 8vw",
    overflow: "auto",
  },
  infoIcons: {
    fontSize: "26px",
    color: "#4B6253",
  },
  cardSubtitle: {
    fontSize: "14px",
    fontWeight: 700,
    color: "#B6C7C3",
  },
  cardName: {
    fontSize: "31px",
    fontWeight: 500,
    color: "#4B6253",
  },
  description: {
    color: "#4B6253",
    fontSize: "16px",
    fontWeight: "bold",
    paddingTop: "2vh",
  },
  backButton: {
    position: "absolute",
    margin: 0,
    top: 10,
    left: 10,
    color: "white",
    zIndex: 99,
    fontSize: "26px",
  },
  buttonRound: {
    borderRadius: 50,
    backgroundColor: "#FFA945",
    position: "absolute",
    margin: "auto",
    zIndex: 1000,
    bottom: 50,
    left: 0,
    right: 0,
    padding: 20,
    boxShadow: "none",
  },
  listItemText: {
    fontSize: 14,
    fontWeight: "normal",
    color: "#787878"
  },
  buttonApply: {
    padding: 20
  }
});

export default InfoStyles;
