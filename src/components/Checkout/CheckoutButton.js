// import { Button } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import LoadingButton from "@mui/lab/LoadingButton";

const CheckoutButton = ({ cartItems }) => {
  const [loading, setLoading] = useState(false);
  const handleOnCheckout = () => {
    setLoading(true);
    axios
      .post("http://localhost:3001/api/stripe/create-checkout-session", {
        cartItems,
      })
      .then((res) => {
        if (res.data.url) {
          window.location.href = res.data.url;
        }
        setLoading(false);
      })
      .catch((e) => {
        console.log("ERROR:", e);
        setLoading(false);
      });
  };
  return (
    <div>
      <LoadingButton
        loading={loading}
        loadingPosition="start"
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
      </LoadingButton>
    </div>
  );
};

export default CheckoutButton;
