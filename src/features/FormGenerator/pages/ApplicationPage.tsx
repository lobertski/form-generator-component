/* eslint-disable @typescript-eslint/no-explicit-any */
import { Fragment, useEffect } from "react";
import { MDBTypography, MDBContainer, MDBRow } from "mdb-react-ui-kit";
import { useDispatch } from "react-redux";
import { Button, Divider, Inputs, Stepper } from "../components";
import { IFieldList, ISection } from "../../../app-config/types";
import {
  setFirstMount,
  submitFormRequest,
} from "../../../store/slices/formSlice";
import { useSelectedForm } from "../../../hooks";
import { useForm } from "react-hook-form";

export const ApplicationPage = () => {
  const { buttons, formSections, steps } = useSelectedForm("basic-form");
  const { handleSubmit, control } = useForm();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setFirstMount({ formID: "basic-form", steps }));
  }, []);

  const handleButtonClick = () => {
    handleSubmit(onSubmit)();
  };

  const onSubmit = (data: Record<string, unknown>) => {
    dispatch(submitFormRequest({ ...data })); // All form values can be accessed here
  };

  return (
    <>

      <form onSubmit={handleSubmit(onSubmit)} className="form-container">
        <MDBContainer className="form-card">
          {formSections.map(({ sectionName, fieldList }: ISection) => (
            <MDBRow key={sectionName}>
              <MDBTypography className="form-title" tag="h4">
                {sectionName}
              </MDBTypography>
              {fieldList.map((field: IFieldList) => (
                <Fragment key={field.id}>
                  <Inputs control={control} field={field} />
                </Fragment>
              ))}
            </MDBRow>
          ))}
          <Button handleButtonClick={handleButtonClick} buttons={buttons} />
        </MDBContainer>
        <Divider />
      </form>
    </>
  );
};
