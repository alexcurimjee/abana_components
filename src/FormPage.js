import React from "react";
import "./styles.css";
import TextField from "./components/TextField";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {}
}));

export default function FormPage() {
  const classes = useStyles();
  const data = {
    title: "Contact Details",
    fields: [
      {
        id: "BUY6Drn9e1",
        component: "foo",
        headline: "Foo"
      },
      {
        id: "gJZoSLkfZV",
        component: "bar",
        title: "Bar"
      },
      {
        id: "X1JAfdsZxy",
        component: "foo",
        headline: "Another headline"
      }
    ]
  };

  return (
    <div>
      <h1>{data.fields[1].title}</h1>
    </div>
  );
}
