import React from "react";
import Carousel from "react-material-ui-carousel";
import { Box, Typography } from "@mui/material";
import hero from "../assets/hero.png";
import slider from "../assets/slider.png";

function CarouselComp() {
  return (
    <Carousel>
      <Box>
        <Typography
          variant="h6"
          sx={{
            position: "absolute",
            left: "5rem",
            top: "5rem",
            display: { xs: "none", sm: "block" },
          }}
        >
          <Box>
            <h1 style={{ fontFamily: " Pacifico,cursive", color: "#518432" }}>
              Get 40% off
            </h1>
            <h2>Organic Fertilizers</h2>
          </Box>
        </Typography>
        <Box>
          <img width="100%" src={hero} alt="Plant" />
        </Box>
        <Typography variant="h6" sx={{ display: { xs: "block", sm: "none" } }}>
          <Box>
            <h1 style={{ fontFamily: " Pacifico,cursive", color: "#518432" }}>
              Get 40% off
            </h1>
            <h2>Organic Fertilizers</h2>
          </Box>
        </Typography>
      </Box>
      <Box>
        <Typography
          variant="h6"
          sx={{
            position: "absolute",
            left: "5rem",
            top: "5rem",
            display: { xs: "none", sm: "block" },
          }}
        >
          <Box>
            <h1 style={{ fontFamily: " Pacifico,cursive", color: "#518432" }}>
              Get 30% off
            </h1>
            <h2>Organic Compost</h2>
          </Box>
        </Typography>
        <Box>
          <img width="100%" src={slider} alt="Plant" />
        </Box>
        <Typography variant="h6" sx={{ display: { xs: "block", sm: "none" } }}>
          <Box>
            <h1 style={{ fontFamily: " Pacifico,cursive", color: "#518432" }}>
              Get 30% off
            </h1>
            <h2>Organic Compost</h2>
          </Box>
        </Typography>
      </Box>
    </Carousel>
  );
}

export default CarouselComp;
