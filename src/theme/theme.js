"use client";
import { createTheme } from "@mui/material/styles";
const theme = createTheme({
  palette: {
    primary: {
      main: "#222222",
    },
    secondary: {
      main: "#2196f3",
    },
  },
  typography: {
    h1: {
      fontSize: "2rem",
      fontWeight: "bold",
    },
    body1: {
      fontSize: "1rem",
    },
  },
});

export default theme;
