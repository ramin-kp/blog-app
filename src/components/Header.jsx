import { AppBar, Container, Toolbar, Typography } from "@mui/material";
import React from "react";
import BookRoundedIcon from "@mui/icons-material/BookRounded";
function Header() {
  return (
    <header>
      <AppBar position="sticky">
        <Container maxWidth="lg">
          <Toolbar>
            <Typography
              component="h1"
              variant="h5"
              fontWeight="bold"
              flexGrow={1}
              sx={{ width: "100%" }}
            >
              پروژه وبلاگ
            </Typography>

            <BookRoundedIcon />
          </Toolbar>
        </Container>
      </AppBar>
    </header>
  );
}

export default Header;
