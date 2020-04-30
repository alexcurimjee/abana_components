import React from "react";
import "./styles.css";
import TextField from "./components/TextField";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Hidden from '@material-ui/core/Hidden';
import CardCatalogue from './components/Card-catalogue';



import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {},

}));

export default function FormPage() {
  const classes = useStyles();
  
  return(
    <CardCatalogue />

  );
}

