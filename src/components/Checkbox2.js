import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import FormGroup from "@material-ui/core/FormGroup";
import Check from "./Check";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: "20px",
    border: "1px solid #dbdbdb",
    padding: "5px 10px",
    height: "200px",
    overflow: "scroll",
    width: "500px",
    position: "relative",

    [theme.breakpoints.down("sm")]: {
      width: "100%"
    }
  }
}));

export default function Checkbox2() {
  const classes = useStyles();
  const labelText = [
    "Cashmere",
    "Merinos",
    "Other Animal Fibres",
    "Silk",
    "Linen",
    "Cotton",
    "Other Natural Fibres",
    "Man-Made Fibres",
    "Performance Materials",
    "Leather",
    "Rubber",
    "Plastic"
  ];

  const listItems = labelText.map(label => (
    <Grid item xs={6} sm={4}>
      <Check label={label} />
    </Grid>
  ));

  return (
    <div>
      <div>
        <FormGroup row>
          <Grid container spacing={1} className={classes.root}>
            {listItems}
          </Grid>
        </FormGroup>
      </div>
    </div>
  );
}
