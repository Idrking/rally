import { makeStyles } from "@material-ui/core/styles";
import zIndex from "@material-ui/core/styles/zIndex";
import { Autorenew } from "@material-ui/icons";

const taskInfoStyles = makeStyles({
  root: {
    backgroundColor: "#94A8A3",
    margin: 0,
    height: "100%",
    width: "100%",
    position: "absolute",
    boxShadow: "none",
    border: "none"
  },

  orgTaskImage: {
    position: "absolute",
    width: "100%",
    opacity: 0.8
  },

  InfoCard: {
    position: "relative",
    width: "100%",
    top: "30vh",
    margin: "auto 0",
    backgroundColor: "#F5F5F5",
    borderRadius: "52px",
    zIndex: 999,
    overflow: "auto",

  },
  CardContent: {
    padding: "5vh 5vw"
  },
  dateRange: {
    fontSize: "25px",
  },
  locationIcon: {
    fontsize: "25px",
  },
  orgName: {
    fontSize: "14px",
    fontWeight: 700,
    color: "#B6C7C3",
    lineHeight: "16px"
  }
});

export default taskInfoStyles;
