/* eslint-disable @typescript-eslint/no-explicit-any */
import { Fragment, useEffect } from "react";
import { MDBTypography, MDBContainer, MDBRow } from "mdb-react-ui-kit";
import { useDispatch } from "react-redux";
import { Button, Divider, Inputs } from "../components";
import { IFieldList, ISection } from "../../../app-config/types";
import {
  setFirstMount,
  setStepForm,
  submitFormRequest,
} from "../../../store/slices/formSlice";
import { useSelectedForm } from "../../../hooks";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import useSelector from "../../../hooks/useSelector";
import { States } from "../../../hooks/types";

const generateFieldValidations = (formSections: ISection[]) => {
  const validations = formSections.reduce(
    (accumulator: Record<string, any>, section: ISection) => {
      section.fieldList.forEach((field: IFieldList) => {
        accumulator[field.id] = field.validation;
      });
      return accumulator;
    },
    {}
  );
  const schema = yup
    .object()
    .shape({
      ...validations,
    })
    .required();
  return schema;
};

export const ApplicationPage = () => {
  const { buttons, formSections, steps } = useSelectedForm("basic-form");
  const { currentStep } = useSelector(States.Form);
  const dispatch = useDispatch();
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(generateFieldValidations(formSections)),
  });

  useEffect(() => {
    dispatch(setFirstMount({ formID: "basic-form", steps }));
  }, []);

  const handleButtonClick = () => {
    handleSubmit(onSubmit)();
  };

  const onSubmit = (data: Record<string, unknown>) => {
    dispatch(submitFormRequest({ ...data }));
    dispatch(setStepForm(currentStep + 1));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form-container">
      <MDBContainer className="form-card">
        {formSections.map(({ sectionName, fieldList }: ISection) => (
          <MDBRow key={sectionName}>
            <MDBTypography className="form-title" tag="h4">
              {sectionName}
            </MDBTypography>
            {fieldList.map((field: IFieldList) => (
              <Fragment key={field.id}>
                <Inputs errors={errors} control={control} field={field} />
              </Fragment>
            ))}
          </MDBRow>
        ))}
        <Button handleButtonClick={handleButtonClick} buttons={buttons} />
      </MDBContainer>
      <Divider />
    </form>
  );
};
