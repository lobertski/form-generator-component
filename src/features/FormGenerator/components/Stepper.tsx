import { Stepper as MuiStepper, Step, StepLabel } from "@mui/material";
import useSelector from "../../../hooks/useSelector";
import { States } from "../../../hooks/types";
import { HTMLProps } from "react";

export const Stepper: React.FC<HTMLProps<HTMLDivElement>> = () => {
  const { steps, currentStep } = useSelector(States.Form);
  const isFinalStep = currentStep + 1 === steps.length;
  const userCurrentStep = isFinalStep ? steps.length + 1 : currentStep;
  return (
    <MuiStepper className="stepper-container" activeStep={userCurrentStep}>
      {steps.map(({ label }, index: number) => (
        <Step key={index + 1}>
          <StepLabel>{label}</StepLabel>
        </Step>
      ))}
    </MuiStepper>
  );
};
