/* eslint-disable @typescript-eslint/no-explicit-any */
import { Fragment, useEffect } from "react";
import { MDBTypography, MDBContainer, MDBRow } from "mdb-react-ui-kit";
import { useDispatch } from "react-redux";
import { Button, Divider, Inputs, Stepper } from "../components";
import { IFieldList, ISection } from "../../../app-config/types";
import { setFirstMount } from "../../../store/slices/formSlice";
import { useSelectedForm } from "../../../hooks";

export const ApplicationPage = () => {
  const { buttons, formSections, steps } = useSelectedForm("basic-form");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setFirstMount({ formID: "basic-form", steps }));
  }, []);
  return (
    <>
      <Stepper className="stepper-container" />
      <form className="form-container">
        <MDBContainer className="form-card">
          {formSections.map(({ sectionName, fieldList }: ISection) => (
            <>
              <MDBRow key={sectionName}>
                <MDBTypography className="form-title" tag="h4">
                  {sectionName}
                </MDBTypography>
                {fieldList.map((field: IFieldList) => (
                  <Fragment key={field.id}>
                    <Inputs field={field} />
                  </Fragment>
                ))}
              </MDBRow>
            </>
          ))}
          <Button buttons={buttons} />
        </MDBContainer>
        <Divider />
      </form>
    </>
  );
};

