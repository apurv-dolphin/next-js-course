import {
  Button,
  makeStyles,
  MobileStepper,
  Paper,
  Typography,
  useTheme,
} from "@material-ui/core";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";
import React from "react";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import Banner1 from "../Images/Banner1.jpg";
import Banner2 from "../Images/Banner2.jpg";
import Banner3 from "../Images/Banner3.jpg";
import Banner4 from "../Images/Banner4.jpg";
import Banner5 from "../Images/Banner5.jpg";
import Image from "next/image";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "100%",
    flexGrow: 1,
  },
  header: {
    display: "flex",
    justifyContent: "center",
    height: 50,
    fontWeight: 900,
    paddingLeft: theme.spacing(4),
    paddingTop: theme.spacing(1.5),
    backgroundColor: theme.palette.background.default,
  },
  img: {
    height: 500,
    display: "flex",
    justifyContent: "center",
    marginLeft: "auto",
    marginRight: "auto",
    maxWidth: "60%",
    overflow: "hidden",
    width: "100%",
    objectFit: "contain",
  },
}));

export default function CustomCarousel() {
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <div className={classes.root}>
      <Paper square elevation={0} className={classes.header}>
        <Typography>Product Image</Typography>
      </Paper>
      <AutoPlaySwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        <Image className={classes.img} src={Banner1} alt="transport" />
        <Image className={classes.img} src={Banner2} alt="city" />
        <Image className={classes.img} src={Banner3} alt="food" />
        <Image className={classes.img} src={Banner4} alt="animals" />
        <Image className={classes.img} src={Banner5} alt="sports" />
      </AutoPlaySwipeableViews>
      <MobileStepper
        steps={5}
        position="static"
        variant="text"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === 5 - 1}
          >
            Next
            {theme.direction === "rtl" ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === "rtl" ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      />
    </div>
  );
}
