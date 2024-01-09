import {
  Avatar,
  Button,
  Card,
  CardActions,
  CardHeader,
  CardMedia,
  Divider,
  Typography,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

function CartEl(props) {
  const { coverPhoto, title, writer, slug } = props;

  return (
    <Card
      sx={{
        width: "250px",
        boxShadow: "rgba(0,0,0,0.2) 0 4px 12px",
        borderRadius: "10px",
      }}
    >
      {writer && (
        <CardHeader
          avatar={
            <Avatar>
              <img
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                }}
                src={writer.avatar.url}
                alt={title}
              />
            </Avatar>
          }
          title={
            <Typography variant="h6" fontSize={"1rem"} fontWeight="700" mr={2}>
              {writer.name}
            </Typography>
          }
          subheader={
            <Typography variant="h6" fontSize={"1rem"} fontWeight="300" mr={2}>
              {writer.field}
            </Typography>
          }
        />
      )}
      <CardMedia
        component="img"
        height="194"
        image={coverPhoto.url}
        alt={title}
        sx={{ margin: "0 auto", flexShrink: "0" }}
      />
      <Typography variant="h6" fontSize={"1rem"} fontWeight="700" m={2}>
        {title}
      </Typography>
      <Divider variant="middle" sx={{ margin: "10px" }} />
      <CardActions width={"100%"}>
        <Link to={`/blogs/${slug}`} style={{ width: "100%" }}>
          <Button variant="outlined" color="warning" sx={{ width: "100%" }}>
            مطالعه مقاله
          </Button>
        </Link>
      </CardActions>
    </Card>
  );
}

export default CartEl;
