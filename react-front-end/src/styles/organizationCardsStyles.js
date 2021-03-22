import { makeStyles } from "@material-ui/core/styles";

const organizationsCardsStyles = makeStyles({
  root: {
    // maxWidth: 400,
    // margin: "auto",
    // marginTop: 30,
    // display: "flex",
    // flexDirection: "row"
    height: "140px"
  },
  cardgrid: {
    display: "grid",
    gridTemplateColumns: "1fr 140px"

  },

  cardflex: {
    display: "flex",
    flexDirection: "column",
    paddingLeft: "30px",
    gap: 20
  },
  media: {
    height: "140px"
  },
  calendaricon: {
    color: "green"
  },
  calendaricon2: {
    color: "blue"
  }, 
  title: {
    fontSize: "18px",
  },
  date: {
    fontSize: "14px",
    color: "#8E8E8E"
  }
});

export default organizationsCardsStyles;