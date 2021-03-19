import React from "react";
import Button from "@material-ui/core/button";
import { Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import "./Landing.scss";
import ArrowRightAltIcon from "@material-ui/icons/ArrowRightAlt";

export default function Landing() {
  return (
    <div className={"background-div"}>
      <div className={"title-div"}>
        <Typography variant="h1" className="rally-title">
          Rally
        </Typography>
        <Typography variant="body1" className="rally-subtitle">
          Building community
        </Typography>
        <Typography variant="body1" className="rally-subtitle">
          through volunteering
        </Typography>

        <br />
        <br />
        <div className={"circle"}></div>
        <Link to="/login">
          <Button
            variant="text"
            style={{ color: "white", paddingLeft: "20px", paddingTop: "0px", fontSize: "24px", textTransform: "capitalize", fontWeight: "300"}}
            className={"title-button"}
            endIcon={<ArrowRightAltIcon />}
          >
            Enter
          </Button>
        </Link>
      </div>
        <img src="https://i.ibb.co/WvYkJGz/megaphone-png-img.png" className={"megaphone"}></img>

      {/* <Link to="/login/register">
        <Button variant="contained" color="primary">Register</Button>
      </Link> */}
    </div>
  );
}
