import React from "react";
import { Container, Grid, Typography } from "@mui/material";
import Logo from "../assets/logo.png";

const footerStyles = {
  marginTop: "2rem",
  backgroundColor: "|EDF3F1",
  color: "#fff",
  padding: "2rem 0",
};

const columnStyles = {
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  //   marginRight: '2rem',
};

const Footer = () => {
  return (
    <footer style={footerStyles}>
      <Container>
        <Grid container>
          <Grid item style={columnStyles}>
            <img src={Logo} alt="Logo" />
          </Grid>
        </Grid>
        <br />

        <Grid container>
          <Grid item style={columnStyles}>
            <Typography
              variant="body"
              sx={{
                color: "#4D4D4D",
                fontFamily: "Gilroy-Medium",
                fontSize: "16px",
                fontStyle: "normal",
                fontWeight: 400,
                lineHeight: "26px",
              }}
            >
              A digital solution to meet driver's requirements through
            </Typography>
            <Typography
              variant="body"
              sx={{
                color: "#4D4D4D",
                fontFamily: "Gilroy-Medium",
                fontSize: "16px",
                fontStyle: "normal",
                fontWeight: 400,
                lineHeight: "26px",
              }}
            >
              one single platform
            </Typography>
          </Grid>
        </Grid>
        <br />
        <Grid container spacing={3}>
          <Grid item xs={4} sm={4} lg={4} style={columnStyles}>
            <Typography
              variant="h6"
              sx={{
                color: "#5C5F5E",
                fontFamily: "Gilroy-Medium",
                fontSize: "16px",
                fontStyle: "normal",
                fontWeight: 400,
                lineHeight: "26px",
              }}
            >
              Services
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: "#5C5F5E",
                fontFamily: "Gilroy-Medium",
                fontSize: "16px",
                fontStyle: "normal",
                fontWeight: 400,
                lineHeight: "26px",
              }}
            >
              Strategy
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: "#5C5F5E",
                fontFamily: "Gilroy-Medium",
                fontSize: "16px",
                fontStyle: "normal",
                fontWeight: 400,
                lineHeight: "26px",
              }}
            >
              Career
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: "#5C5F5E",
                fontFamily: "Gilroy-Medium",
                fontSize: "16px",
                fontStyle: "normal",
                fontWeight: 400,
                lineHeight: "26px",
              }}
            >
              Investor
            </Typography>
          </Grid>
          <Grid item xs={4} sm={4} lg={4} style={columnStyles}>
            <Typography
              variant="h6"
              sx={{
                color: "#5C5F5E",
                fontFamily: "Gilroy-Medium",
                fontSize: "16px",
                fontStyle: "normal",
                fontWeight: 400,
                lineHeight: "26px",
              }}
            >
              About
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: "#5C5F5E",
                fontFamily: "Gilroy-Medium",
                fontSize: "16px",
                fontStyle: "normal",
                fontWeight: 400,
                lineHeight: "26px",
              }}
            >
              Our Product
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: "#5C5F5E",
                fontFamily: "Gilroy-Medium",
                fontSize: "16px",
                fontStyle: "normal",
                fontWeight: 400,
                lineHeight: "26px",
              }}
            >
              Our Service
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: "#5C5F5E",
                fontFamily: "Gilroy-Medium",
                fontSize: "16px",
                fontStyle: "normal",
                fontWeight: 400,
                lineHeight: "26px",
              }}
            >
              Contact
            </Typography>
          </Grid>
          <Grid item xs={4} sm={4} lg={4} style={columnStyles}>
            <Typography
              variant="h6"
              sx={{
                color: "#5C5F5E",
                fontFamily: "Gilroy-Medium",
                fontSize: "16px",
                fontStyle: "normal",
                fontWeight: 400,
                lineHeight: "26px",
              }}
            >
              News
            </Typography>
            <Typography
              variant="h6"
              sx={{
                color: "#5C5F5E",
                fontFamily: "Gilroy-Medium",
                fontSize: "16px",
                fontStyle: "normal",
                fontWeight: 400,
                lineHeight: "26px",
              }}
            >
              Company
            </Typography>
          </Grid>
        </Grid>
      </Container>
      <hr
        style={{
          width: "1156px",
          height: "1px",
          border: "none",
          borderTop: "2px solid #21B07D",
          borderRadius: "2px",
        }}
      />
      <Grid container alignItems="left">
        <Grid item style={{ flexGrow: 1 }}>
          <Typography
            variant="body"
            sx={{
              color: "#5C5F5E",
              fontFamily: "Gilroy-Medium",
              fontSize: "14px",
              fontStyle: "normal",
              fontWeight: 400,
              lineHeight: "20px",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "30px",
              marginLeft: "20%",
            }}
          >
            {new Date().getFullYear()} Travel Help Squad - Powered by Orcalo
            Holdings
          </Typography>
        </Grid>
      </Grid>
    </footer>
  );
};

export default Footer;
