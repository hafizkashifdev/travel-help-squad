import React from "react";
import { Typography } from "@mui/material";

const TravelHelpSquad = () => {
  return (
    <div>
      <Typography
        variant="h1"
        sx={{
          color: "#21B07D",
          fontFamily: "Gilroy-Bold",
          fontSize: "40px",
          fontStyle: "normal",
          fontWeight: 400,
        }}
      >
        Travel Help Squad{" "}
      </Typography>
      <br/>
      <Typography
        variant="body1"
        sx={{
          color: "#5C5F5E",
          textAlign: "center",
          fontFamily: " Gilroy-Medium",
          fontSize: "16px",
          fontStyle: "normal",
          fontWeight: 400,
          lineHeight:"32px"
        }}
      >
        As individuals at Travel Help Squad, We are dedicated to driving
        innovation in the parking enforcement industry and continually{" "}
      </Typography>
      <Typography
        variant="body1"
        sx={{
          color: "#5C5F5E",
          textAlign: "center",
          fontFamily: " Gilroy-Medium",
          fontSize: "16px",
          fontStyle: "normal",
          fontWeight: 400,
          lineHeight:"32px"

        }}
      >
        exploring new ways to improve our solutions. We believe that by
        leveraging the latest technologies, we can help our clients optimize
      </Typography>
      <Typography
        variant="body1"
        sx={{
          color: "#5C5F5E",
          textAlign: "center",
          fontFamily: " Gilroy-Medium",
          fontSize: "16px",
          fontStyle: "normal",
          fontWeight: 400,
        }}
      >
        their parking enforcement operations and improve traffic flow in their
        communities.
      </Typography>
    </div>
  );
};

export default TravelHelpSquad;
