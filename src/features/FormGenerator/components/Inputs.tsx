/* eslint-disable @typescript-eslint/no-explicit-any */
import { Controller, Control, FieldErrors } from "react-hook-form";
import { MDBInput, MDBValidationItem } from "mdb-react-ui-kit";
import { IFieldList } from "../../../app-config/types";

interface InputsProps {
  field: IFieldList;
  control: Control<any>;
  errors: FieldErrors<Record<string, any>>;
  hidden: boolean;
}

export const Inputs = ({ field, control, errors, hidden }: InputsProps) => {
  const { type, label, id, required } = field;
  const isFieldError = !!errors[id];
  const fieldLabel = required ? `${label} *` : label;
  return (
    <>
      {!hidden && (
        <div style={{ marginBottom: "1rem" }}>
          <Controller
            control={control}
            name={id}
            render={({ field }) => (
              <MDBValidationItem
                invalid={isFieldError}
                feedback={errors[id]?.message?.toString()}
              >
                <MDBInput
                  type={type}
                  label={fieldLabel}
                  {...field}
                  className={errors[id] && "is-invalid"}
                />
                {errors[id] && (
                  <div className="invalid-feedback">
                    {errors[id]?.message?.toString()}
                  </div>
                )}
              </MDBValidationItem>
            )}
          />
        </div>
      )}
    </>
  );
};
