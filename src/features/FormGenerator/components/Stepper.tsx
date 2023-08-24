import { Stepper as MuiStepper, Step, StepLabel } from "@mui/material";
import useSelector from "../../../hooks/useSelector";
import { States } from "../../../hooks/types";

export const Stepper: React.FC<HTMLElement> = () => {
  const { steps, currentStep } = useSelector(States.Form);

  return (
    <MuiStepper className="stepper-container" activeStep={currentStep}>
      {steps.map(({ label }, index: number) => (
        <Step key={index + 1}>
          <StepLabel>{label}</StepLabel>
        </Step>
      ))}
    </MuiStepper>
  );
};
