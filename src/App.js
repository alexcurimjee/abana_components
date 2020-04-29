import React from "react";
import "./styles.css";

import ComponentForm from "./ComponentForm";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#FF6158",
      contrastText: "#fff"
    },
    secondary: {
      main: "#43425D"
    },
    text: {
      primary: "#4D4F5C"
    }
  },
  typography: {
    fontFamily: [
      "Source Sans Pro",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"'
    ].join(",")
    
  }
});

export default function App() {
  const test = 'hello';
  return (
    <MuiThemeProvider theme={theme}>
      <ComponentForm />
    </MuiThemeProvider>
  );
}
