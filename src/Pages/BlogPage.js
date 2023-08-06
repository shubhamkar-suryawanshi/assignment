import React from "react";
import { Container, Grid } from "@mui/material";
import BlogCard from "../Components/BlogCard";

function BlogPage() {
  return (
    <React.Fragment>
      <Container maxWidth="lg" sx={{ marginTop: "3rem" }}>
        <Grid container spacing={5}>
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
        </Grid>
      </Container>
    </React.Fragment>
  );
}

export default BlogPage;
