import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles(theme => ({
  outlinedRoot: {
    backgroundColor: "#FAFAFA",
    "&:hover $notchedOutline": {
      borderColor: "#2c2c3e"
    },
    "&$outlinedFocused $notchedOutline": {
      borderColor: "black"
    }
  },
  outlinedFocused: {},
  notchedOutline: {}
}));

export default function BasicTextFields() {
  const classes = useStyles();

  return (
    <div>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField
          id="outlined-basic"
          margin="dense"
          variant="outlined"
          InputProps={{
            classes: {
              root: classes.outlinedRoot,
              focused: classes.outlinedFocused,
              notchedOutline: classes.notchedOutline
            }
          }}
        />
      </form>
    </div>
  );
}
