import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import FormGroup from "@material-ui/core/FormGroup";
import Check from "./Check";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: "20px",
    padding: "5px 10px",

    [theme.breakpoints.down("sm")]: {
      width: "100%"
    }
  }
}));

export default function Checkbox3() {
  const classes = useStyles();

  const labelText = [
    "1. Raw Material Production",
    "2. Yarn Spinning",
    "3. Yarn/Fabric Dyeing",
    "4. Weaving / Circular & Flat Knitting",
    "5. Fabric Printing",
    "6. Garment Printing",
    "7. Embroidery",
    "8. Make Up",
    "9. Garment Dyeing",
    "10. Washing"
  ];

  const labelText1 = [
    "USA",
    "UK",
    "EUROPE",
    "RUSSIA",
    "MIDDLE EAST",
    "AFRICA",
    "INDIAN SUB-CON",
    "CHINA/EAST ASIA",
    "JAPAN",
    "AUSTRALIA / PACIFIC"
  ];

  const listItems = labelText.map(label => (
    <Grid item xs={12} sm={6}>
      <Check label={label} />
    </Grid>
  ));

  const listItems1 = labelText1.map(label => (
    <Grid item xs={6} sm={4}>
      <Check label={label} />
    </Grid>
  ));

  return (
    <div>
      <div className={classes.root}>
        <FormGroup row>
          <Grid container spacing={1}>
            {listItems}
          </Grid>
        </FormGroup>
      </div>

      <hr style={{ borderColor: "#fafafa" }} />

      <div className={classes.root}>
        <FormGroup row>
          <Grid container spacing={1}>
            {listItems1}
          </Grid>
        </FormGroup>
      </div>
    </div>
  );
}
