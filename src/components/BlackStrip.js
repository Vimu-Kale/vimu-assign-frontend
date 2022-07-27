import { Stack, Typography } from "@mui/material";
import { Container, Box } from "@mui/system";
import React from "react";

const BlackStrip = () => {
  return (
    <Box
      sx={{ position: "sticky", top: 0, zIndex: 2, backgroundColor: "#020202" }}
    >
      <Container>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          spacing={1}
          sx={{
            backgroundColor: "#020202",
            // height: "2.5rem",
            height: "44px",
            color: "white",
          }}
        >
          <Typography
            sx={{
              fontFamily: "Poppins",
              fontWeight: "600",
              fontSize: { xs: "11px", md: "12px" },
            }}
            // fontSize={{ xs: "0.8rem" }}
          >
            <span style={{ color: "#A2A6B0" }}>Mon-Thu:</span>{" "}
            <span>9:00AM-5:30PM</span>
          </Typography>
          <Typography
            sx={{ fontFamily: "Poppins", fontWeight: "600" }}
            // fontSize={{ xs: "0.8rem" }}
            fontSize="12px"
          >
            Call Us: (00) 12345678
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
};

export default BlackStrip;
