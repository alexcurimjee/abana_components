import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import CardListing from "./Card-listing";
import CardRFQ from "./Card-rfq";

const useStyles = makeStyles(theme => ({
  root: {
    flexWrap: "nowrap",
    display: "flex",
    overflowX: "auto"
  },
  item: {
    marginRight: "16px",
    flex: "0 0 auto"
  }
}));

export default function CardCarousel(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.item}>
        {props.typeListing ? (
          <CardListing owner={props.owner} />
        ) : (
          <CardRFQ owner={props.owner} />
        )}
      </div>

      <div className={classes.item}>
        {props.typeListing ? (
          <CardListing owner={props.owner} />
        ) : (
          <CardRFQ owner={props.owner} />
        )}
      </div>

      <div className={classes.item}>
        {props.typeListing ? (
          <CardListing owner={props.owner} />
        ) : (
          <CardRFQ owner={props.owner} />
        )}
      </div>

      <div className={classes.item}>
        {props.typeListing ? (
          <CardListing owner={props.owner} />
        ) : (
          <CardRFQ owner={props.owner} />
        )}
      </div>

      <div className={classes.item}>
        {props.typeListing ? (
          <CardListing owner={props.owner} />
        ) : (
          <CardRFQ owner={props.owner} />
        )}
      </div>

      <div className={classes.item}>
        {props.typeListing ? (
          <CardListing owner={props.owner} />
        ) : (
          <CardRFQ owner={props.owner} />
        )}
      </div>
    </div>
  );
}
