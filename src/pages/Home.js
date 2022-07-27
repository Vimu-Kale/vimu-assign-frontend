import React, { useState, useEffect } from "react";
import DialogueBox from "../components/DialogueBox";
import BlackStrip from "../components/BlackStrip";
import ResponsiveAppBar from "../components/AppBar/ResponsiveAppBar";
import ProductAboutNav from "../components/Product/ProductAboutNav/ProductAboutNav";
import ProductBody from "../components/Product/ProductBody/ProductBody";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { resetCart } from "../slices/cart/cartSlice";
const Home = () => {
  const [open, setOpen] = useState(false);
  const [dialogType, setDialogType] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const query = new URLSearchParams(window.location.search);

    if (query.get("success")) {
      dispatch(resetCart());
      setDialogType("success");
      setOpen(true);
      query.delete("success");
      navigate(
        {
          search: query.toString(),
        },
        { replace: true }
      );
    }

    if (query.get("cancelled")) {
      setDialogType("cancelled");
      setOpen(true);
      query.delete("cancelled");
      navigate(
        {
          search: query.toString(),
        },
        { replace: true }
      );
    }
  }, [navigate, dispatch]);

  return (
    <div>
      <DialogueBox open={open} setOpen={setOpen} dialogType={dialogType} />
      <BlackStrip />
      <ResponsiveAppBar />
      <ProductAboutNav />
      <ProductBody />
    </div>
  );
};

export default Home;
