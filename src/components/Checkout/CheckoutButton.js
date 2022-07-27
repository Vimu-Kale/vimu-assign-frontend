import { Button } from "@mui/material";
import axios from "axios";
import React from "react";

const CheckoutButton = ({ cartItems }) => {
  const handleOnCheckout = () => {
    axios
      .post("http://localhost:3001/api/stripe/create-checkout-session", {
        cartItems,
      })
      .then((res) => {
        if (res.data.url) {
          window.location.href = res.data.url;
        }
      })
      .catch((e) => {
        console.log("ERROR:", e);
      });
  };
  return (
    <div>
      <Button
        variant="contained"
        sx={{
          height: "50px",
          width: "151px",
          borderRadius: "50px",
          backgroundColor: "#0156ff",
          padding: `.6rem 2.1rem .6rem 2.1rem`,
          fontFamily: `Poppins, sans-sarif`,
          fontWeight: "600",
          "&:hover": {
            backgroundColor: "#0156ff",
          },
          textTransform: "none",
        }}
        onClick={() => handleOnCheckout()}
      >
        Buy Now
      </Button>
    </div>
  );
};

export default CheckoutButton;
