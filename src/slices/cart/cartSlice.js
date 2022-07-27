import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [
    {
      id: 1,
      name: "New Apple AirPods (3rd Generation)",
      price: "299",
      qty: "1",
    },
  ],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    resetCart: (state) => initialState,
    increment: (state, action) => {
      console.log("initial array", state.items);
      state.items = state.items.map((item) => {
        if (item.id === action.payload) {
          console.log("found", { ...item, qty: item.qty++ });
          return { ...item, qty: item.qty++ };
        }
        return item;
      });

      console.log("updated array", state.items);
    },
    decrement: (state, action) => {
      console.log("initial array", state.items);
      state.items = state.items.map((item) => {
        if (item.id === action.payload) {
          console.log("found", { ...item, qty: item.qty-- });
          return { ...item, qty: item.qty-- };
        }
        return item;
      });

      console.log("updated array", state.items);
    },
  },
});

export const { increment, decrement, resetCart } = cartSlice.actions;
export default cartSlice.reducer;
