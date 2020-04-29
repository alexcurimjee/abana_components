import React from "react";
import "./styles.css";

import CardCarousel from "./components/Cardcarousel";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {}
}));

export default function CardPage() {
  const classes = useStyles();
  const hello = "hello";
  return (
    <div>
      <h2> Listing / RFI Cards: </h2>
      <CardCarousel typeListing owner="Zadig & Voltaire" />

      <hr style={{ borderColor: "#ececec", margin: "20px 0" }} />

      <h2> RFQ Cards: </h2>
      <CardCarousel owner="Zadig & Voltaire" />
    </div>
  );
}
