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
            maxWidth: "100%",
            height: "auto",
            display: "flex",
            flexDirection: "column",
            gap: "2rem",
          }}
        >
          <img
            src={TrafficSignalImage}
            alt="Left"
            style={{
              width: "114px",
              height: "180px",
              marginLeft: "30%",
              border: "1px solid black",
              background: "red",
            }}
          />

          <Typography
            variant="body1"
            sx={{
              ml: "76%",
              color: "#5C5F5E",
              textAlign: "end",
              maxWidth: "622px",
              width: "100%",
              fontStyle: "Gilroy-Bold",
              fontSize: "40px",
              zIndex: 1,
            }}
          >
            <span style={{ border: "1px solid black" }}>Passing your d </span>
            <span
              style={{
                color: "white",
                fontStyle: "Gilroy-Bold",
                border: "1px solid black",
              }}
              className="span-head"
            >
              riving test and
            </span>
            <span style={{ marginLeft: "5%", border: "1px solid black" }}>
              becoming a new d
            </span>
            <span
              style={{
                color: "white",
                fontStyle: "Gilroy-Bold",
                fontSize: "40px",
                marginLeft: "0%",
                border: "1px solid black",
              }}
            >
              river in the UK!
            </span>
          </Typography>

          <br />
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <Typography
              variant="body1"
              sx={{
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
              enforcement challenges. We work closely with our clients to
              understand their unique needs and develop tailored solutions that
              meet their specific requirements.
            </Typography>
          </div>
        </div>
      </Grid>

      <Grid item xs={12} sm={6}>
        <div
          style={{
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
