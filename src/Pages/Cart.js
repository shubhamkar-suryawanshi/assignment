import React from "react";
import { useSelector } from "react-redux";
import PurchasedProduct from "../Components/PurchasedProduct";
import { Box, Button, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { clearCart } from "../shared/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <Box>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="h6">Cart Items - {cartItems.length}</Typography>
        <Button variant="outlined" onClick={handleClearCart}>
          Clear Cart
        </Button>
      </Box>
      {cartItems?.length === 0 && (
        <h1> Cart is empty. Add Items to the cart!</h1>
      )}

      <PurchasedProduct items={cartItems} />
    </Box>
  );
};

export default Cart;
