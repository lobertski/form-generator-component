import { Controller, Control } from "react-hook-form";
import { MDBInput } from "mdb-react-ui-kit";
import { IFieldList } from "../../../app-config/types";

interface InputsProps {
  field: IFieldList;
  control: Control<Record<string, any>>;
}

export const Inputs = ({ field, control }: InputsProps) => {
  const { type, label, id } = field;

  return (
    <>
      <div style={{ marginBottom: "2rem" }}>
        <Controller
          control={control}
          name={id}
          render={({ field: { onChange, onBlur, value } }) => (
            <MDBInput
              type={type}
              label={label}
              onChange={onChange}
              onBlur={onBlur}
              value={value}
            />
          )}
        />
      </div>
    </>
  );
};
