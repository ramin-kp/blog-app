import { Avatar, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

function AuthorBox(props) {
  const { name, slug, avatar } = props;
  return (
    <Link
      to={`authors/${slug}`}
      style={{ display: "flex", alignItems: "center", padding: "10px" }}
    >
      <Avatar>
        <img
          src={avatar.url}
          alt={name}
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
      </Avatar>
      <Typography variant="h6" fontWeight={300} mr={2}>
        {name}
      </Typography>
    </Link>
  );
}

export default AuthorBox;
