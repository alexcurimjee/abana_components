import React from "react";
import FormGroup from "@material-ui/core/FormGroup";
import Check from "./Check";

export default function Checkbox1(props) {
  const labelText1 = (
    <label>
      Compliance is an important value for ABANA. By signing up you agree that
      we check your information and let you know of your application status
      within business days.
    </label>
  );
  const labelText2 = (
    <label>
      By creating an account you agree with our <a href="/">Terms of Service</a>
      , <a href="/">Privacy Policy</a>, and{" "}
      <a href="/">our default Notification Settings</a>.{" "}
    </label>
  );

  return (
    <FormGroup row>
      <Check label={labelText1} />
      <Check label={labelText2} />
    </FormGroup>
  );
}
