import React from "react";

import { makeStyles } from "@mui/styles";
import { Typography } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  container: {
    height: "250px",
    width: "300px",
    backgroundColor: "whitesmoke",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "0.5rem",
    [theme.breakpoints.down("md")]: {
        width: "345px"
    }
  },
  cardSection: {
    border: "solid 0.01em",
    borderColor: "rgba(0, 0, 255, 0.05)",
    borderRadius: "0.5rem",
    height: "100px",
    width: "240px",
    marginBottom: "8px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    textAlign: "center",
    [theme.breakpoints.down("md")]: {
        width: "280px"
    }
  },
  loremText: {
    fontSize: "10px",
  },
}));

const MainSectionCard = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.cardSection}>
        <Typography>
          <b>LOREM IPSUM LOREM</b>
        </Typography>
        <Typography variant="body2" sx={{fontSize: {xs: "10px"}}}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
          accumsan justo ullamcorper, suscipit odio nec, finibus nibh. Sed
          sagittis suscipit mi, quis semper felis tincidunt vel.
        </Typography>
      </div>
      <div className={classes.cardSection}>
        <Typography>
          <b>LOREM IPSUM LOREM</b>
        </Typography>
        <Typography variant="body2" sx={{fontSize: {xs: "10px"}}}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
          accumsan justo ullamcorper, suscipit odio nec, finibus nibh. Sed
          sagittis suscipit mi, quis semper felis tincidunt vel.
        </Typography>
      </div>
    </div>
  );
};

export default MainSectionCard;
