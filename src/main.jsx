import React from "react";
import ReactDOM from "react-dom/client";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { ThemeProvider } from "@mui/material";

import App from "./App.jsx";
import theme from "./src/styles/theme.js";

import "./src/styles/index.css";
import "./src/styles/fonts.css";
import { BrowserRouter } from "react-router-dom";
const client = new ApolloClient({
  uri:import.meta.env.VITE_BASE_URL,
  cache: new InMemoryCache(),
});
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ApolloProvider client={client}>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </ApolloProvider>
    </BrowserRouter>
  </React.StrictMode>
);
