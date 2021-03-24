import { makeStyles } from "@material-ui/core/styles";

const organizationsCardsStyles = makeStyles({
  root: {
    height: "144px",
  },
  root2: {
    height: "160px",
  },
  cardgrid: {
    display: "grid",
    gridTemplateColumns: "1fr 140px",
  },
  cardflex: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    gap: 2,
  },
  cardorggrid: {
    // display: "grid",
    // gridTemplateRows: "1fr 1fr",
    padding: "10px 16px",
  },
  cardtaskgrid2: {
    display: "grid",
    gridTemplateRows: "2fr 1fr",
    padding: 0,
  },
  sectionflex: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  media: {
    height: "144px",
    opacity: "0.9",
  },
  media2: {
    height: "160px",
  },
  calendaricon: {
    color: "green",
  },
  calendaricon2: {
    color: "blue",
  },
  title: {
    fontSize: "18px",
  },
  date: {
    fontSize: "14px",
    color: "#C4C4C4",
  },
});

export default organizationsCardsStyles;
