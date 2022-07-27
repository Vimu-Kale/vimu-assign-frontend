import { Typography } from "@mui/material";
import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Box } from "@mui/system";
import { AboutProductText } from "../ProductAboutNav/ProductAboutNav";

const theme = createTheme({
  typography: {
    fontFamily: "Poppins",
  },
});

const ProductDesc = ({ product }) => {
  const { headline, tagline, descArray, unitNo } = product;

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          textAlign: "justify",
          paddingLeft: { xs: "15px", md: "3rem" },
          paddingRight: { xs: "15px", md: "1rem" },
          backgroundColor: { xs: "#ffffff", md: "#f5f7ff" },
        }}
      >
        <div>
          <Typography
            sx={{
              fontWeight: "400",
              fontSize: "12px",
              color: "#A2A6B0",
              paddingBottom: "1rem",
              paddingTop: "2rem",
              display: {
                xs: "none",
                md: "block",
              },
            }}
          >
            APPLE PRODUCTS
          </Typography>
          <div>
            <Box
              sx={{
                display: {
                  xs: "block",
                  md: "none",
                },
              }}
            >
              <AboutProductText />
            </Box>
            <Typography
              sx={{
                fontWeight: "500",
                fontSize: { xs: "22px", sm: "27px", md: "32px" },
                textAlign: "left",
              }}
            >
              {headline}
            </Typography>
            <Typography
              sx={{ fontWeight: "400", fontSize: "12px", paddingTop: "0.5rem" }}
            >
              {tagline}
            </Typography>
          </div>
          <Box
            sx={{
              fontweigh: "300",
              paddingRight: { xs: 0, md: "3.6rem" },
              fontSize: { xs: "12px", md: "14px" },
              color: "#000000",
            }}
          >
            <ul
              style={{
                padding: 0,
                paddingLeft: "1rem",
                listStyleType: "disc",
              }}
            >
              {descArray.map((line, i) => {
                return <li key={i}>{line}</li>;
              })}
            </ul>
          </Box>

          <Box sx={{ fontWeight: "300", fontSize: "12px", paddingTop: "1rem" }}>
            <Typography color="#000000">{unitNo}</Typography>
          </Box>
        </div>
      </Box>
    </ThemeProvider>
  );
};

export default ProductDesc;
