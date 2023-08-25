import { useSelectedForm } from "../../hooks";
import useSelector from "../../hooks/useSelector";
import { States } from "../../hooks/types";
import { ApplicationPage, ReviewPage, SucsessPage } from "./pages";
import { Stepper } from "./components";

type ComponentType = "ApplicationForm" | "ReviewPage" | "SucessPage";

const FormGenerator = () => {
  const { steps } = useSelectedForm("basic-form");
  const { currentStep, formValues } = useSelector(States.Form);
  const { component }: { component: ComponentType } = steps[currentStep];
  const RenderComponent = (component: ComponentType) => {
    switch (component) {
      case "ApplicationForm":
        return <ApplicationPage />;
      case "ReviewPage":
        return <ReviewPage formValues={formValues} />;
      case "SucessPage":
        return <SucsessPage />;
      default:
        return <></>;
    }
  };

  return (
    <>
      <Stepper className="stepper-container" />
      {RenderComponent(component)}
    </>
  );
};

export default FormGenerator;
