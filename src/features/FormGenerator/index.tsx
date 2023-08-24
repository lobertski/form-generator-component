import { useSelectedForm } from "../../hooks";
import useSelector from "../../hooks/useSelector";
import { States } from "../../hooks/types";
import { ApplicationPage, ReviewPage } from "./pages";

type ComponentType = "ApplicationForm" | "ReviewPage";

const FormGenerator = () => {
  const { steps } = useSelectedForm("basic-form");
  const { currentStep } = useSelector(States.Form);
  const { component }: { component: ComponentType } = steps[currentStep];
  const RenderComponent = (component: ComponentType) => {
    switch (component) {
      case "ApplicationForm":
        return <ApplicationPage />;
      case "ReviewPage":
        return <ReviewPage />;
      default:
        return <></>;
    }
  };

  return <>{RenderComponent(component)}</>;
};

export default FormGenerator;
