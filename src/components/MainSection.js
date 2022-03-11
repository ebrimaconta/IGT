import React from "react";

import { makeStyles } from "@mui/styles";
import { Typography, Link } from "@mui/material";

import Carousel from "./Carousel/Carousel";
import MainSectionCard from "./MainSectionCard";

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: "#063970",
    height: "400px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    [theme.breakpoints.down('md')]: {
        flexDirection: "column",
        justifyContent: "flex-start",
        height: "450px"
    }
  },
  links: {
    display: "flex",
    flexDirection: "row",
    backgroundColor: "#063970",
    justifyContent: "flex-end",
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
  },
}));

const MainSection = () => {
  const classes = useStyles();

  return (
    <div>
      <div className={classes.links}>
          <Link href="#" color="inherit" underline="hover">
          <Typography variant="h6" color="white" style={{marginRight: "10px", marginTop: "10px"}}>
         <b> Link 1 </b>
        </Typography>
          </Link>
          <Link href="#" color="inherit" underline="hover">
        <Typography variant="h6" color="white" style={{marginRight: "10px", marginTop: "10px"}}>
          <b><span>&#8226;</span> Link 2 <span>&#8226;</span></b>
        </Typography>
        </Link>
        <Link href="#" color="inherit" underline="hover">
        <Typography variant="h6" color="white" style={{marginTop: "10px", marginRight: "17.5rem"}}>
          <b>Link 3</b>
        </Typography>
        </Link>
      </div>
      <div className={classes.container}>
        <Carousel />
        <MainSectionCard />
      </div>
    </div>
  );
};

export default MainSection;
