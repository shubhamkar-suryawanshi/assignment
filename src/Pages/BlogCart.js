import React from "react";
import { useSelector } from "react-redux";
import { Box, Button, Typography } from "@mui/material";

// RT
import { useDispatch } from "react-redux";
import { addItem } from "../shared/blogSlice";
import { clearCart } from "../shared/blogSlice";

function BlogCart() {
  const cartItems = useSelector((store) => store.cart.items);

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const handleAddItem = (item) => {
    dispatch(addItem(item));
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
        <h1> Blog Cart is empty. Add blogs to the cart!</h1>
      )}

      {cartItems.map((item) => {
        console.log(item);
        console.log(item.size);
        <div>
          <h1 color="black">{item.size}</h1>
        </div>;
      })}
    </Box>
  );
}

export default BlogCart;
