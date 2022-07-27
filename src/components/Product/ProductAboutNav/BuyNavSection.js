import { Stack, Typography } from "@mui/material";
import React from "react";
import CheckoutButton from "../../Checkout/CheckoutButton";
import { useSelector } from "react-redux";
import Counter from "../../Counter/Counter";

const BuyNavSection = ({ product }) => {
  const { items } = useSelector((state) => state.cart);

  return (
    <Stack
      direction="row"
      sx={{
        gap: { xs: "1rem", sm: "2rem" },
      }}
      style={{
        display: "flex",
        alignItems: "center",
      }}
    >
      <Typography
        fontFamily="Poppins"
        sx={{ fontSize: { xs: "12px", md: "14px" } }}
        fontWeight="400"
      >
        Price:{" "}
        <span style={{ fontWeight: "600" }}>
          ${(Math.round(product.price * 100) / 100).toFixed(2)}
        </span>
      </Typography>
      <Counter />
      <CheckoutButton cartItems={items} />
    </Stack>
  );
};

export default BuyNavSection;
