import { useCallback } from "react";
import { MDBBtn } from "mdb-react-ui-kit";
import Stack from "react-bootstrap/Stack";
import { IButtons } from "../../../app-config/types";
import { useDispatch } from "react-redux";
import useSelector from "../../../hooks/useSelector";
import { States } from "../../../hooks/types";
import {
  setStepForm,
  submitFormRequest,
} from "../../../store/slices/formSlice";

export const Button = ({
  buttons,
  handleButtonClick,
}: {
  buttons: IButtons[];
  handleButtonClick?: any;
}) => {
  const dispatch = useDispatch();
  const { currentStep } = useSelector(States.Form);

  const handleStep = useCallback(() => {
    dispatch(setStepForm(currentStep + 1));
    dispatch(submitFormRequest());
    handleButtonClick();
  }, []);

  return (
    <Stack>
      {buttons.map(({ label }: IButtons) => (
        <MDBBtn key={label} onClick={handleStep} className="stack-container">
          {label}
        </MDBBtn>
      ))}
    </Stack>
  );
};
