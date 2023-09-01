import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TrafficSignalImage from "../../src/assets/trafficsignalimage.png";
import DriverImage from "../../src/assets/driverimageuk.png";

const DrivingTestSection = () => {
  return (
    <Grid container sx={{ padding: 2, spacing: 3 }}>
      <Grid item xs={12} sm={6}>
        <div
          style={{
            position: "relative",
            maxWidth: "100%",
            height: "auto",
          }}
        >
          <img
            src={TrafficSignalImage}
            alt="Left"
            style={{ width: "114px", height: "180px", marginRight: "20%" }}
          />

          <Typography
            variant="body1"
            sx={{
              position: "absolute",
              left: "65%",
              color: "#5C5F5E",
              textAlign: "end",
              maxWidth: "622px",
              width: "100%",
              fontStyle: "Gilroy-Bold",
              fontSize: "40px",
            }}
          >
            Passing your driving test and becoming a new driver in the UK!
          </Typography>

          <Typography
            variant="body1"
            sx={{
              position: "absolute",
              top: "190%",
              left: "40%",
              color: "#5C5F5E",
              textAlign: "end",
              maxWidth: "678px",
              width: "100%",
              color: "#5C5F5E",
            }}
          >
            Our team consists of experienced developers, parking enforcement
            specialists, and industry experts who are passionate about
            delivering innovative solutions that address real-world parking
            enforcement challenges.We work closely with our clients to
            understand their unique needs and develop tailored solutions that
            meet their specific requirements.
          </Typography>
        </div>
      </Grid>

      <Grid item xs={12} sm={6}>
        <div
          style={{
            position: "relative",
            maxWidth: "100%",
            height: "auto",
            marginRight: "30%",
          }}
        >
          <img
            src={DriverImage}
            alt="Right"
            style={{ maxWidth: "373px", height: "auto", width: "100%" }}
          />
        </div>
      </Grid>
    </Grid>
  );
};

export default DrivingTestSection;
