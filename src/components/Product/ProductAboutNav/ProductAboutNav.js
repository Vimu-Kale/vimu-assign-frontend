import { Container, Paper } from "@mui/material";
import React from "react";
import BuyNavSection from "./BuyNavSection";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Product from "../Product";

export const AboutProductText = () => {
  return (
    <p
      style={{
        fontFamily: "poppins",
        fontWeight: "600",
        fontSize: "14px",
        color: "#666666",
        textDecorationLine: "underline",
        textDecorationColor: "#0156ff",
        textDecorationThickness: "0.2rem",
        textUnderlineOffset: "0.2rem",
      }}
    >
      About Product
    </p>
  );
};

const ProductAboutNav = () => {
  return (
    <>
      <Paper
        sx={{
          display: { xs: "none", md: "flex" },
          borderRadius: 0,
          backgroundColor: "transparent",
          elevation: "1",
        }}
        style={{
          position: "sticky",
          top: "44px",
          // height: "6rem",
          height: "101px",
          zIndex: 1200,
          backgroundColor: "white",
        }}
      >
        <Container
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ paddingLeft: "3rem" }}>
            <AboutProductText />
          </div>
          <div>
            <BuyNavSection product={Product} />
          </div>
        </Container>
      </Paper>

      {/* ------------------------------------------------------------------ */}

      <AppBar
        position="fixed"
        color="primary"
        sx={{
          top: "auto",
          bottom: 0,
          height: "90px",
          display: { md: "none" },
          backgroundColor: "white",
          color: "black",
          py: "1rem",
        }}
      >
        <Toolbar sx={{ justifyContent: "space-evenly" }}>
          <BuyNavSection product={Product} />
        </Toolbar>
      </AppBar>
    </>
  );
};

export default ProductAboutNav;
