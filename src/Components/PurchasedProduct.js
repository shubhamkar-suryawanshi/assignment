import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, Button, CardActions } from "@mui/material";

// RT
import { useDispatch } from "react-redux";
import { addItem } from "../shared/cartSlice";

function PurchasedProduct({ items, dummy }) {
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  return (
    <Box>
      {items.map((item) => {
        <Card
          sx={{
            width: "100%",
            boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px;",
            borderRadius: "1rem",
            color: "black",
          }}
        >
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <CardMedia
              component="img"
              alt="green iguana"
              sx={{ width: "100px" }}
              image={item.img}
            />
            <CardContent>
              <Typography variant="h5" component="div">
                {item.company}
              </Typography>
              <Typography variant="body2">{item.catagory}</Typography>
              <Box>
                <Typography
                  sx={{ textDecoration: "line-through" }}
                  component="span"
                >
                  {item.mrp}
                </Typography>{" "}
                <Typography component="span">{item.discounted}</Typography>
              </Box>
            </CardContent>

            <CardActions>
              <Button
                variant="contained"
                color="success"
                sx={{
                  padding: "0.5rem",
                  borderRadius: "0.5rem",
                }}
                onClick={() => {
                  handleAddItem(item);
                }}
              >
                Add
              </Button>
            </CardActions>
          </Box>
        </Card>;
      })}
    </Box>
  );
}

export default PurchasedProduct;
