import { Box, Button, Container, Grid, Typography } from "@mui/material";
import fungicide from "../assets/fungicide.png";

function HomeBlog(props) {
  return (
    <Grid item xs={12} lg={6}>
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid item xs={12} lg={5}>
            <Box textAlign="center" margin="auto">
              <img width="100%" src={fungicide} alt="Plant" />
            </Box>
          </Grid>

          <Grid item xs={12} lg={7} sx={{ textAlign: "left" }}>
            <Box sx={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <Typography variant="caption" component="p">
                January 1, 2023
              </Typography>
              <Typography variant="subtitle2" component="h6">
                AGRI 4.0: FUTURE OF INDIAN AGRICULTURE
              </Typography>
              <Typography variant="body2" component="p">
                Agriculture 4.0 is a considerably advanced version of precision
                farming methods. The idea of revolution in agriculture involves
                the use of the Internet of Things (IoT), big data, artificial
                intelligence, and robotics to accelerate and improve the
                efficiency of activities throughout the entire production chain.
              </Typography>
              <Button variant="outlined" color="success">
                Read More
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Grid>
  );
}

export default HomeBlog;

// Add code for next and previous once blogs available
// https://codesandbox.io/s/testimonial-silder-8y5d7?file=/src/Components/NextBtn.jsx
