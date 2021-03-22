import { makeStyles } from "@material-ui/core/styles";

const organizationsCardsStyles = makeStyles({
  root: {
    height: "140px",
  },

  root2: {
    paddingTop: 2,
  },
  cardgrid: {
    display: "grid",
    gridTemplateColumns: "1fr 140px",
  },
  cardflex: {
    display: "flex",
    flexDirection: "column",
    paddingLeft: "30px",
    gap: 10,
  },
  sectionflex: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingRight: 40
  },
  media: {
    height: "140px",
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
