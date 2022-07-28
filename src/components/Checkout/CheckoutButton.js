// import { Button } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import LoadingButton from "@mui/lab/LoadingButton";
import * as API_URLS from "../../services/urls";

const CheckoutButton = ({ cartItems }) => {
  const [loading, setLoading] = useState(false);

  //HITTING THE CREATE CHECKOUT SESSION ENDPOINT ALONG WITH PRODUCT DATA
  const handleOnCheckout = () => {
    setLoading(true);
    axios
      .post(API_URLS.CHECKOUT_SESSION_URL, {
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
