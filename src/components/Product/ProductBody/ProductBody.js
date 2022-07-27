import React from "react";
import ProductCarousel from "./ProductCarousel";
import ProductDesc from "./ProductDesc";
import Grid from "@mui/material/Grid";
import { Container } from "@mui/material";

import Product from "../Product";

const ProductBody = () => {
  console.log("Product:", Product);
  return (
    <Container maxWidth="lg" sx={{ paddingBottom: "8rem" }}>
      <Grid
        container
        // spacing={1}
        item
        sx={{
          flexDirection: { xs: "column-reverse", md: "row" },
        }}
      >
        <Grid
          item
          xs={12}
          sm={12}
          md={6}
          lg={7}
          sx={{
            backgroundColor: { xs: "#ffffff", md: "#F5F7FF" },
            position: "relative",
            ":before": {
              content: "''",
              top: 0,
              bottom: 0,
              width: "9600px",
              position: "absolute",
              background: "#F5F7FF",
              right: "100%",
            },
          }}
        >
          <ProductDesc product={Product} />
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={6}
          lg={5}
          style={{ backgroundColor: "white" }}
        >
          <ProductCarousel product={Product} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default ProductBody;
