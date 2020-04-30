import React from "react";
import "./styles.css";

import ComponentForm from "./ComponentForm";
import { MuiThemeProvider, createMuiTheme, makeStyles } from "@material-ui/core/styles";

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
      primary: "#4D4F5C",
      secondary: "#B5B5B5"
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


  return (
    <MuiThemeProvider theme={theme}>
      <ComponentForm/>
    </MuiThemeProvider>
  );
}
