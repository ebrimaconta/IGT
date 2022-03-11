import React from "react";

import { makeStyles } from "@mui/styles";
import { Typography } from "@mui/material";

import Icon from "../assets/react.svg";

const useStyles = makeStyles((theme) => ({
  container: {
    height: "110px",
    width: "190px",
    backgroundColor: "#003459",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1,
    position: "absolute",
    top: "0px"
  },
}));

const Logo = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Typography variant="h5">
        <span style={{ color: "white" }}>
          <b>YOUR</b>
        </span>
        <span
          style={{
            backgroundImage: `url(${Icon})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            color: "#e0e0eb",
            padding: "10px 0px",
            backgroundPositionX: "center"

          }}
        >
          LOGO
        </span>
      </Typography>
    </div>
  );
};

export default Logo;
