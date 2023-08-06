import { Container, Typography, Box, Grid, Divider } from "@mui/material";
import React from "react";

function Footer() {
  return (
    <Container maxWidth="lg" sx={{ padding: "2rem" }}>
      <Divider />
      <Grid container spacing={2} sx={{ padding: "2rem", textAlign: "left" }}>
        <Grid item xs={12} md={6} lg={4}>
          <Typography variant="h6">Contact Us</Typography>
          <Box>
            <Typography variant="subtitle1">Address: X Colony, Mars</Typography>
            <Typography variant="subtitle1">Phone: 123456789</Typography>
            <Typography variant="subtitle1">
              Email: support@greenkart.com
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Typography variant="h6">Products</Typography>
          <Box>
            <Typography variant="subtitle1">Bestseller</Typography>
            <Typography variant="subtitle1">Latest Products</Typography>
            <Typography variant="subtitle1">Special Products</Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Typography variant="h6">Service</Typography>
          <Box>
            <Typography variant="subtitle1">About Us</Typography>
            <Typography variant="subtitle1">Contact Us</Typography>
            <Typography variant="subtitle1">Privacy & Policy</Typography>
            <Typography variant="subtitle1">Terms & Conditions</Typography>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Footer;
