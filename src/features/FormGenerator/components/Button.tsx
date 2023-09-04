import { useCallback } from "react";
import { MDBBtn } from "mdb-react-ui-kit";
import Stack from "react-bootstrap/Stack";
import { IButtons } from "../../../app-config/types";
import { useDispatch } from "react-redux";
import useSelector from "../../../hooks/useSelector";
import { States } from "../../../hooks/types";
import { setStepForm } from "../../../store/slices/formSlice";

export const Button = ({
  buttons,
  handleButtonClick,
}: {
  buttons: IButtons[];
  handleButtonClick?: () => void;
}) => {
  const dispatch = useDispatch();
  const { currentStep } = useSelector(States.Form);
  const handleStep = useCallback(() => {
    if (handleButtonClick) {
      return handleButtonClick();
    }
    dispatch(setStepForm(currentStep + 1));
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
