import { Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../../slices/cart/cartSlice";
const Counter = () => {
  const dispatch = useDispatch();
  const { items } = useSelector((state) => state.cart);
  const [qty, setQty] = useState(null);
  useEffect(() => {
    setQty(items[0].qty);
  }, [items]);

  console.log("quantity:", qty);
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "row",
          alignItems: "center",
          backgroundColor: "#F5F7FF",
          height: "50px",
          width: "70px",
          borderRadius: "6px",
        }}
      >
        <Typography
          sx={{
            fontFamily: "Poppins",
            fontWeight: 600,
            fontSize: "13px",
          }}
        >
          {qty}
        </Typography>
        <Stack
          direction="column"
          sx={{ paddingTop: "0.3rem", paddingLeft: "0.8rem" }}
        >
          {qty >= 3 ? (
            <span style={{ marginBottom: "-5px" }}>
              <ExpandLessIcon
                fontSize="0rem"
                sx={{
                  color: "#dddfe8",
                  cursor: "default",
                }}
              />
            </span>
          ) : (
            <span
              style={{ marginBottom: "-5px" }}
              onClick={() => {
                dispatch(increment(1));
              }}
            >
              <ExpandLessIcon
                fontSize="0rem"
                sx={{
                  color: "#a2a6b0",
                  cursor: "pointer",
                }}
              />
            </span>
          )}
          {qty <= 1 ? (
            <span style={{ marginTop: "-5px" }}>
              <ExpandMoreIcon
                fontSize="0.1rem"
                sx={{
                  color: "#dddfe8",
                  cursor: "default",
                }}
              />
            </span>
          ) : (
            <span
              style={{ marginTop: "-5px" }}
              onClick={() => {
                dispatch(decrement(1));
              }}
            >
              <ExpandMoreIcon
                fontSize="0.1rem"
                fontWeight="bolder"
                sx={{
                  color: "#a2a6b0",
                  cursor: "pointer",
                }}
              />
            </span>
          )}
        </Stack>
      </div>
    </div>
  );
};

export default Counter;
