import React from "react";
import { Container, Grid, Typography } from "@mui/material";

import Author from "../components/Author";
import Blogs from "./../components/Blogs";

function Index() {
  return (
    <main>
      <Container maxWidth="lg">
        <Grid container padding={4} spacing={2}>
          <Grid item xs={12} md={3}>
            <Typography
              component="p"
              variant="h5"
              fontWeight="700"
              fontSize="1.5rem"
            >
              نویسنده ها
            </Typography>
            <Author />
          </Grid>
          <Grid item xs={12} md={9}>
            <Typography
              component="p"
              variant="h5"
              fontWeight="700"
              fontSize="1.5rem"
            >
              مقالات
            </Typography>
            <Blogs />
          </Grid>
        </Grid>
      </Container>
    </main>
  );
}

export default Index;
