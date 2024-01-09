import { AppBar, Box, Container, Toolbar, Typography } from "@mui/material";
import React from "react";
import BookRoundedIcon from "@mui/icons-material/BookRounded";
import { Link } from "react-router-dom";
function Header() {
  return (
    <header>
      <AppBar
        position="sticky"
        sx={{ borderRadius: "8px", backgroundColor: "#f57c00" }}
      >
        <Container maxWidth="lg">
          <Toolbar>
            <Typography
              component="h1"
              variant="h5"
              fontWeight="bold"
              flexGrow={1}
              sx={{ width: "100%" }}
            >
              <Link to="/">پروژه وبلاگ</Link>
            </Typography>
            <Link
              to="/"
              style={{ display: "inline-flex", alignItems: "center" }}
            >
              <BookRoundedIcon />
            </Link>
          </Toolbar>
        </Container>
      </AppBar>
    </header>
  );
}

export default Header;
