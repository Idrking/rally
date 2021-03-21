import { makeStyles } from "@material-ui/core/styles";
import zIndex from "@material-ui/core/styles/zIndex";
import { Autorenew } from "@material-ui/icons";

const taskInfoStyles = makeStyles({
  root: {

    backgroundColor: "#94A8A3",
    height: "100%",
    display: "grid"

  },

  orgTaskImage: {
    zIndex: "-1"


  },

  TaskCard1: {
    display: "flex",
    marginTop: 20,
    margin: "auto",
    flexDirection: "column",
    backgroundColor: "white",
    borderRadius: "25px",


  },
  dateRange: {
    fontSize: "25px"
  },
  locationIcon: {
    fontsize: "15px"
  }

});

export default taskInfoStyles;