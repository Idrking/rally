import { makeStyles } from "@material-ui/core/styles";

const organizationsCardsStyles = makeStyles({
  root: {
    // maxWidth: 400,
    // margin: "auto",
    // marginTop: 30,
    // display: "flex",
    // flexDirection: "row"
    height: "110px"
  },

  cardgrid: {
    display: "grid",
    gridTemplateColumns: "4fr 3fr"

  },

  cardflex: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    flex: '1 0 auto',
    // padding: "10px 0 0 20px"
    paddingLeft: "30px"
  },
  media: {
    height: "110px",
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
    fontSize: "14px"
  }
});

export default organizationsCardsStyles;