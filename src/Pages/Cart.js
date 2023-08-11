import React from "react";
import { useSelector } from "react-redux";
import PurchasedProduct from "../Components/PurchasedProduct";
import { Box, Button, Typography } from "@mui/material";
import { clearCart } from "../shared/cartSlice";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardActions from "@mui/material/CardActions";

// RT
import { useDispatch } from "react-redux";
import { addItem } from "../shared/cartSlice";

const Cart = () => {
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
        <h1> Cart is empty. Add Items to the cart!</h1>
      )}

      {/* <PurchasedProduct items={cartItems} /> */}
      {cartItems.map((item) => {
        console.log(item);
        console.log(item.size);
        <div>
          <h1 color="black">{item.size}</h1>
        </div>;
        // <Card
        //   sx={{
        //     width: "100%",
        //     boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px;",
        //     borderRadius: "1rem",
        //     color: "black",
        //   }}
        // >
        //   <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        //     <CardMedia
        //       component="img"
        //       alt="green iguana"
        //       sx={{ width: "100px" }}
        //       image={item.img}
        //     />
        //     <CardContent>
        //       <Typography variant="h5" component="div">
        //         {item.company}
        //       </Typography>
        //       <Typography variant="body2">{item.catagory}</Typography>
        //       <Box>
        //         <Typography
        //           sx={{ textDecoration: "line-through" }}
        //           component="span"
        //         >
        //           {item.mrp}
        //         </Typography>{" "}
        //         <Typography component="span">{item.discounted}</Typography>
        //       </Box>
        //     </CardContent>

        //     <CardActions>
        //       <Button
        //         variant="contained"
        //         color="success"
        //         sx={{
        //           padding: "0.5rem",
        //           borderRadius: "0.5rem",
        //         }}
        //         onClick={() => {
        //           handleAddItem(item);
        //         }}
        //       >
        //         Add
        //       </Button>
        //     </CardActions>
        //   </Box>
        // </Card>;
      })}
    </Box>
  );
};

export default Cart;
