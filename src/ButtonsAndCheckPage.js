import React from "react";
import "./styles.css";

import TextField from "./components/TextField";
import Button from "@material-ui/core/Button";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

import Checkbox1 from "./components/Checkbox1";
import Checkbox2 from "./components/Checkbox2";
import Checkbox3 from "./components/Checkbox3";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    [theme.breakpoints.down("xs")]: {
      margin: 0
    },
    [theme.breakpoints.up("sm")]: {
      margin: "0 65px"
    }
  },
  disp: {
    width: "250px",
    display: "flex",
    flexDirection: "column"
  }
}));

export default function ButtonsAndCheckPage() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <h2> Text Fields: </h2>
      <span className="comment"> changes: </span>
      <ul className="comment">
        <li>background color</li>
      </ul>
      <TextField label="TextField"/>
      <hr style={{ borderColor: "#ececec", margin: "20px 0" }} />

      <h2> Buttons: </h2>
      <span className="comment"> changes:</span>
      <ul className="comment">
        <li>disabledElevation prop</li>
        <li>reset text to uppercase</li>
        <li>back-button more tight</li>
      </ul>
      <div className={classes.disp}>
        {/*Margin just for presentation's sake*/}
        <Button
          style={{ marginBottom: "10px" }}
          disableElevation
          variant="contained"
          color="primary"
        >
          NEXT
        </Button>

        <Button
          style={{ marginBottom: "10px" }}
          disableElevation
          variant="outlined"
          color="primary"
        >
          NEXT
        </Button>
      </div>
      <Button style={{ marginBottom: "10px" }} startIcon={<ArrowBackIosIcon />}>
        Back
      </Button>

      <hr style={{ borderColor: "#ececec", margin: "20px 0" }} />
      <h2> Checkboxes (Agreements): </h2>
      <span className="comment"> changes:</span>
      <ul className="comment">
        <li>Label is not sqeezed onto the checkbox anymore</li>
        <li>Label aligned correctly with checkbox </li>
      </ul>
      <Checkbox1 color="primary" />

      <hr style={{ borderColor: "#ececec", margin: "20px 0" }} />
      <h2> Checkboxes (Options): </h2>
      <span className="comment"> changes:</span>
      <ul className="comment">
        <li>
          Label is not sqeezed onto the checkbox anymore and are aligned
          correctly
        </li>
        <li>Only two items per row when screen small</li>
        <li>When small container takes 100% of width</li>
        <li>Checkbox container height changed to 200px accross all pages</li>
      </ul>
      <Checkbox2 />

      <hr style={{ borderColor: "#ececec", margin: "20px 0" }} />
      <h2> Checkboxes (Production Capability + Markets): </h2>
      <span className="comment"> changes:</span>
      <ul className="comment">
        <li>Two/three items per row when screen big</li>
        <li>One/two item per row when screen small</li>
      </ul>
      <Checkbox3 />
    </div>
  );
}
