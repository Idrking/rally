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
    color: "#fff",
  },
  buttonflex: {
    display: "flex",
    flexDirection: "column",
    gap: 20,
    paddingTop: 30,
  },
  createButton: {
    backgroundColor: "#B6C7C3",
    color: "#fff",
    textAlign: "left",
    padding: 25,
    boxShadow: "none",
    boxSizing: "border-box",
    borderRadius: "14px",
    fontSize: 18,
    textTransform: "capitalize",
  },
  editButton: {
    backgroundColor: "#F9D4A9",
    color: "#787878",
    textAlign: "left",
    padding: 25,
    boxShadow: "none",
    boxSizing: "border-box",
    borderRadius: "14px",
    fontSize: 18,
    textTransform: "capitalize",
  },
});

export default OrgDashStyles;
