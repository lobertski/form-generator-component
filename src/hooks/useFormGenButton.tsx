import { MouseEvent } from "react";
import { useDispatch } from "react-redux";
import useSelector from "./useSelector";
import { States } from "./types";
import { setStepForm } from "../store/slices/formSlice";

export const useFormButton = (action: string) => {
  const dispatch = useDispatch();
  const { currentStep } = useSelector(States.Form);
  const handleButton = (e?: MouseEvent) => {
    e?.preventDefault();
    console.log(1)
    dispatch(setStepForm(currentStep + 1));
  };
  console.log(action, "sdfsd");
  switch (action) {
    case "next":
      handleButton();
      break;
    default:
      return () => {};
  }
};
