import { Typography } from "@mui/material";
import React from "react";

function Footer() {
  return (
    <footer>
      <Typography
        component="h4"
        variant="h5"
        textAlign="center"
        bgcolor="#f57c00"
        color="white"
        borderRadius={1}
        padding={1}
        fontWeight="500"
      >
        پروژه وبلاگ | Graph Ql ساخته شه با ❤️ توسط رامین کریم پور
      </Typography>
    </footer>
  );
}

export default Footer;
