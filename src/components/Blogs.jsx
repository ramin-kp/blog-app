import { useQuery } from "@apollo/client";
import { Grid } from "@mui/material";
import React from "react";
import { GET_BLOGS_INFO } from "../graphql/query";
import CartEl from "./CartEl";
import Loader from "./Loader";

function Blogs() {
  const { loading, data, error } = useQuery(GET_BLOGS_INFO);
  if (loading) return <Loader />;
  if (error) return <h1>errors ...</h1>;
  return (
    <section>
      <Grid container spacing={2}>
        {data.posts.map((blog) => (
          <Grid item xs={12} sm={6} lg={4} key={blog.id}>
            <CartEl {...blog} />
          </Grid>
        ))}
      </Grid>
    </section>
  );
}

export default Blogs;
