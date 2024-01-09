import { Avatar, Box, Typography } from "@mui/material";
import React from "react";

function CommentBox({ name, email, text }) {
  return (
    <section style={{ margin: "10px 0" }}>
      <Box
        component="div"
        sx={{
          border: "solid",
          borderWidth: 1,
          borderRadius: 2,
          padding: 2,
          borderColor: "#fb8c00",
        }}
      >
        <Box component="div" display="flex" alignItems="center" columnGap={2}>
          <Avatar
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              bgcolor: "#fb8c00",
            }}
          >
            {name.slice(0, 1)}
          </Avatar>
          <Typography variant="h7">{name}</Typography>
        </Box>
        <Box component="h4">{text}</Box>
      </Box>
    </section>
  );
}

export default CommentBox;
