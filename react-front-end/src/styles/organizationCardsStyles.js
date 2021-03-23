import { makeStyles } from "@material-ui/core/styles";

const organizationsCardsStyles = makeStyles({
  root: {
    height: "140px",
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
    paddingLeft: "25px",
    gap: 10,
  },
  sectionflex: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  media: {
    height: "140px",
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
    color: "#8E8E8E",
  },
});

export default organizationsCardsStyles;
