import { useCallback } from "react";
import { MDBBtn } from "mdb-react-ui-kit";
import Stack from "react-bootstrap/Stack";
import { IButtons } from "../../../app-config/types";

export const Button = ({
  buttons,
  handleButtonClick,
}: {
  buttons: IButtons[];
  handleButtonClick: () => void;
}) => {
  const handleStep = useCallback(() => {
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
