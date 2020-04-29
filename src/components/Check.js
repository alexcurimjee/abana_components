import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

const useStyles = makeStyles(theme => ({
  checkboxContainer: {
    alignItems: "flex-start"
  },

  checkboxLabel: {
    paddingTop: "9px"
  },

  checkboxRoot: {
    color: "#FF6158",
    "&$checkboxChecked": {
      color: "#FF6158"
    }
  },
  checkboxChecked: {}
}));

export default function Checkbox1(props) {
  const classes = useStyles();

  return (
    <FormControlLabel
      label={props.label}
      classes={{
        root: classes.checkboxContainer,
        label: classes.checkboxLabel
      }}
      control={
        <Checkbox
          name="check1"
          color="primary"
          classes={{
            root: classes.checkboxRoot,
            checked: classes.checkboxChecked
          }}
        />
      }
    />
  );
}
