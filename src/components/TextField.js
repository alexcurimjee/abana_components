import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";


const useStyles = makeStyles(theme => ({

  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },

  textRoot: {
      marginTop: '0px'
  },
  outlinedRoot: {
    backgroundColor: "#FAFAFA",
    "&:hover $notchedOutline": {
      borderColor: "#2c2c3e"
    },
    "&$outlinedFocused $notchedOutline": {
      borderColor: "black"
    }
  },
  label: {
    fontWeight: '600',
    marginTop: '8px',
  },
  outlinedFocused: {},
  notchedOutline: {}
}));

export default function BasicTextFields(props) {
  const classes = useStyles();

  return (
    <div>
      <Grid container direction="column" className={classes.root}> 
        <label className={classes.label}>
          {props.label}
        </label>
        <TextField
          id="outlined-basic"
          margin="dense"
          variant="outlined"
          classes = {{
            root: classes.textRoot, 
          }}
          InputProps={{
            classes: {
              root: classes.outlinedRoot,
              focused: classes.outlinedFocused,
              notchedOutline: classes.notchedOutline,
            }
          }}
        />
      </Grid>
    </div>
  );
}
