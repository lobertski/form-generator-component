import { MDBContainer, MDBRow, MDBTypography } from "mdb-react-ui-kit";
import { Fragment } from "react";
import { useSelectedForm } from "../../../hooks";
import { Button } from "../components";
import { IFieldList, ISection } from "../../../app-config/types";

interface IReviewPage {
  formValues: Record<string, any>;
}

export const ReviewPage = ({ formValues }: IReviewPage) => {
  const { buttons, formSections } = useSelectedForm("basic-form");
  return (
    <MDBContainer className="form-card">
      {formSections.map(({ sectionName, fieldList }: ISection) => (
        <MDBRow key={sectionName}>
          <MDBTypography className="form-title" tag="h4">
            {sectionName}
          </MDBTypography>
          {fieldList.map(({ label, id }: IFieldList) => (
            <Fragment key={id}>
              <MDBTypography className="lead">
                {`${label}: ${formValues?.[id] ?? ""}`}
              </MDBTypography>
            </Fragment>
          ))}
        </MDBRow>
      ))}
      <Button buttons={buttons} />
    </MDBContainer>
  );
};
