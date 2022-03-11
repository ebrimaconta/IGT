import React from "react";

import { Typography } from "@mui/material";
import Icon from "../assets/react.svg";

const LogoMob = () => {
  return (
    <div>
      <Typography variant="h5">
        <span style={{ color: "white" }}><b>YOUR</b></span>
        <span
          style={{
            backgroundImage: `url(${Icon})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            color: "#e0e0eb",
            padding: "5px 0px",
            backgroundPositionX: "center",
          }}
        >
          LOGO
        </span>
      </Typography>
    </div>
  );
};

export default LogoMob;
