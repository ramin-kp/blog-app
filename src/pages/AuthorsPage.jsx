import React from "react";
import { useQuery } from "@apollo/client";
import { GET_AUTHOR_INFO } from "../graphql/query";
import { useParams } from "react-router-dom";
import { Avatar, Container, Grid, Typography } from "@mui/material";
import sanitizeHtml from "sanitize-html";

import CartEl from "../components/CartEl";
import Loader from "../components/Loader";

function AuthorsPage() {
  const { slug } = useParams();
  const { loading, data, error } = useQuery(GET_AUTHOR_INFO, {
    variables: { slug },
  });
  if (loading) return <Loader />;
  if (error) return <h1>error...</h1>;
  const { avatar, field, id, name, description, posts } = data.writer;
  // console.log(data);
  console.log(posts);
  return (
    <main>
      <Container maxWidth="lg">
        <Grid container>
          <Grid
            item
            xs={12}
            display="flex"
            flexDirection="column"
            alignItems="center"
            margin={2}
          >
            <Avatar sx={{ width: "150px", height: "150px", margin: "0 auto" }}>
              <img
                src={avatar.url}
                alt={name}
                style={{ width: "100%", objectFit: "cover" }}
              />
            </Avatar>
            <Typography
              variant="h5"
              my={1}
              color="text.primary"
              fontSize="2rem"
              fontWeight="700"
            >
              {name}
            </Typography>
            <Typography variant="h5" color="text.primary" fontWeight="300">
              {field}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <div
              style={{ padding: "10px 0" }}
              dangerouslySetInnerHTML={{
                __html: sanitizeHtml(description.html),
              }}
            ></div>
          </Grid>
          <Grid item>
            <Typography variant="h5" fontWeight="700" my={3}>
              مقالات
              <span style={{ color: "#fb8c00", marginRight: "5px" }}>
                {" "}
                {name}
              </span>
            </Typography>
            <Grid container my={3} spacing={4}>
              {posts.map((post) => (
                <Grid key={post.id} item xs={12} md={6}>
                  <CartEl {...post} />
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </main>
  );
}

export default AuthorsPage;
