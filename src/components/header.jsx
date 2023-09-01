import React from "react";
import { AppBar, Toolbar, Typography, Link, Box } from "@mui/material";
import Logo from "../assets/logo.png";
import styles from "../components/header.style.css";
import ArrowIcon from "../../src/assets/arrowicon.png";

const Header = () => {
  return (
    <>
      <AppBar
        elevation={0}
        position="fixed"
        sx={{ backgroundColor: "transparent" }}
      >
        <Toolbar sx={{ justifyContent: "space-between", flexDirection: "row" }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              ml: "120px",
              mt: "36px",
            }}
          >
            <img src={Logo} alt="Logo" />
          </Box>
          <Box
            sx={{
              width: "Hug (575px)",
              height: "Hug (20px)",
              gap: "36px",
              display: "flex",
              justifyContent: "flex-start",
            }}
          >
            <Link
              href="#"
              sx={{
                mr: "20px",
                color: "#21B07D",
                borderBottom: "2px solid #21B07D",
                pb: "3px",
                textDecoration: "none",
                color: "#21B07D",
                fontFamily: "Gilroy-SemiBold",
                fontSize: "16px",
                fontStyle: "normal",
                fontWeight: 400,
                lineHeight: "normal",
              }}
            >
              Home
            </Link>
            <Link
              href="#"
              sx={{
                mr: "20px",
                color: "#BEC2C1",
                textDecoration: "none",
                color: "#BEC2C1",
                fontFamily: "Gilroy-SemiBold",
                fontSize: "16px",
                fontStyle: "normal",
                fontWeight: 400,
                lineHeight: "normal",
              }}
            >
              Blogs
            </Link>
            <Link
              href="#"
              sx={{
                mr: "20px",
                color: "#BEC2C1",
                textDecoration: "none",
                color: "#BEC2C1",
                fontFamily: "Gilroy-SemiBold",
                fontSize: "16px",
                fontStyle: "normal",
                fontWeight: 400,
                lineHeight: "normal",
              }}
            >
              Pricing
            </Link>
            <Link
              href="#"
              sx={{
                mr: "20px",
                color: "#BEC2C1",
                textDecoration: "none",
                color: "#BEC2C1",
                fontFamily: "Gilroy-SemiBold",
                fontSize: "16px",
                fontStyle: "normal",
                fontWeight: 400,
                lineHeight: "normal",
              }}
            >
              Our Offering
            </Link>
            <Link
              href="#"
              sx={{
                mr: "20px",
                color: "#BEC2C1",
                textDecoration: "none",
                color: "#BEC2C1",
                fontFamily: "Gilroy-SemiBold",
                fontSize: "16px",
                fontStyle: "normal",
                fontWeight: 400,
                lineHeight: "normal",
              }}
            >
              Contact Us
            </Link>
            <Link
              href="#"
              sx={{
                mr: "20px",
                color: "#BEC2C1",
                textDecoration: "none",
                color: "#BEC2C1",
                fontFamily: "Gilroy-SemiBold",
                fontSize: "16px",
                fontStyle: "normal",
                fontWeight: 400,
                lineHeight: "normal",
              }}
            >
              Solutions
              <img
                src={ArrowIcon}
                alt="Arrow"
                style={{
                  backgroundColor: "transparent",
                  marginLeft: "5px",
                  border: "none",
                }}
              />
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
