import React from "react";
import "./styles.css";

import ButtonsAndCheckPage from "./ButtonsAndCheckPage";
import CardsPage from "./CardsPage";
import FormPage from "./FormPage";
import Catalogue from "./Catalogue";

import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",

  },
  stepper: {
    borderBottom: "1px solid #ececec",
  },
  backButton: {
    marginRight: theme.spacing(1),
    marginLeft: "50px"
  },
  nextButton: {
    float: "right",
    width: "100px",
    marginRight: "50px"
  },
  buttons: {
    position: "fixed",
    bottom: 0,
    left: 0,
    backgroundColor: "white",
    width: "100%",
    borderTop: "1px solid #ececec",
    padding: "16px 0"
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1)
  },
  container: {
    margin: '20px 0 0 0',
    padding: '20px 16px',
    [theme.breakpoints.up("sm")]: {
      margin: '20px 30px',
      padding: '20px 24px',
    }
    

  }
}));

function getSteps() {
  return ["Buttons & CheckBoxes", "RFI & RFQ Cards", "Forms", "Catalogue"];
}

function getStepContent(stepIndex) {
  switch (stepIndex) {
    case 0:
      return <Catalogue />;
    case 1:
      return <CardsPage />;
    case 2:
      return <FormPage />;
    case 3:
      return <ButtonsAndCheckPage />;
    default:
      return "Unknown stepIndex";
  }
}

export default function HorizontalLabelPositionBelowStepper() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
    scrollToTop();
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
    scrollToTop();
  };

  const handleReset = () => {
    setActiveStep(0);
    scrollToTop();
  };

  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep} alternativeLabel className={classes.stepper}>
        {steps.map(label => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <Paper className={classes.container}>
        {activeStep === steps.length ? (
          <div>
            <Typography component={"span"} className={classes.instructions}>
              All steps completed
            </Typography>
            <Button onClick={handleReset}>Reset</Button>
          </div>
        ) : (
          <div>
            <Typography component={"span"} className={classes.instructions}>
              {getStepContent(activeStep)}
            </Typography>
            <div className={classes.buttons}>
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                className={classes.backButton}
                startIcon={<ArrowBackIosIcon />}
              >
                Back
              </Button>
              <Button
                variant="contained"
                disableElevation
                color="primary"
                onClick={handleNext}
                className={classes.nextButton}
              >
                {activeStep === steps.length - 1 ? "Finish" : "Next"}
              </Button>
            </div>
          </div>
        )}
      </Paper>
    </div>
  );
}
