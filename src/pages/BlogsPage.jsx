import { useQuery } from "@apollo/client";
import React from "react";
import { GET_BLOG_INFO } from "../graphql/query";
import { useNavigate, useParams } from "react-router-dom";
import Loader from "../components/Loader";

import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import { Container, Divider, Grid, Typography } from "@mui/material";
import sanitizeHtml from "sanitize-html";
import CommentField from "../components/CommentField";
import CommentBox from "../components/CommentBox";

function BlogsPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { loading, data, error } = useQuery(GET_BLOG_INFO, {
    variables: { slug },
  });

  if (loading) return <Loader />;
  if (error) return <h1>error...</h1>;
  const { coverPhoto, title, content, comments } = data.post;
  return (
    <main>
      <Container maxWidth="lg">
        <Grid
          container
          display="flex"
          flexDirection="column"
          justifyContent="center"
        >
          <Grid
            item
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            my={4}
          >
            <Typography variant="h5" fontWeight="800" color="#fb8c00">
              {title}
            </Typography>

            <ArrowBackRoundedIcon
              style={{ cursor: "pointer" }}
              onClick={() => navigate(-1)}
            />
          </Grid>
          <Grid item xs={12}>
            <img
              style={{ width: "100%", width: "100%" }}
              src={coverPhoto.url}
              alt={title}
            />
          </Grid>
          <Grid item>
            <div
              dangerouslySetInnerHTML={{ __html: sanitizeHtml(content.html) }}
            ></div>
          </Grid>
          <Divider
            variant="middle"
            sx={{ marginBottom: "20px", bgcolor: "#f7f7f7" }}
          />
          <Grid
            item
            bgcolor="white"
            borderRadius={3}
            padding={2}
            my={3}
            boxShadow="rgba(0,0,0,0.2) 0px 4px 12px"
          >
            <Typography variant="h4" fontWeight="500" fontSize="2rem">
              فرم کامنت
            </Typography>
            <CommentField slug={slug} />
          </Grid>
          <Grid
            item
            bgcolor="white"
            borderRadius={3}
            padding={2}
            my={3}
            boxShadow="rgba(0,0,0,0.2) 0px 4px 12px"
          >
            <Typography variant="h4" fontWeight="500" fontSize="2rem">
              کامنت های وبلاگ <span style={{ color: "#fb8c00" }}>{title}</span>
            </Typography>
            {comments.map((comment) => (
              <CommentBox {...comment} key={comment.id} />
            ))}
          </Grid>
        </Grid>
      </Container>
    </main>
  );
}

export default BlogsPage;
