"use client";

import React from "react";

const useMultiStepHook = () => {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return {
    activeStep,

    handleNext,
    handleBack,
    handleReset,
  };
};

export default useMultiStepHook;
