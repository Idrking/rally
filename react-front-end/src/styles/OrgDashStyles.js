import { makeStyles } from "@material-ui/core/styles";

const OrgDashStyles = makeStyles({
  buttons: {
    color: "#787878",
    textAlign: "left",
    padding: 25,
    backgroundColor: "transparent",
    boxShadow: "none",
    border: "1px solid #CFCFCF",
    boxSizing: "border-box",
    borderRadius: "14px",
    fontSize: 18,
    textTransform: "capitalize",
  },
  badge: {
    width: "100%",
    fontSize: "30px",
  },
  buttonflex: {
    display: "flex",
    flexDirection: "column",
    gap: 20,
    paddingTop: 30,
  },
});

export default OrgDashStyles;
