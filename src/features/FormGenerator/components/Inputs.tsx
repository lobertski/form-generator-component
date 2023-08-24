import { useForm } from "react-hook-form";
import { MDBInput } from "mdb-react-ui-kit";
import { IFieldList } from "../../../app-config/types";

export const Inputs = ({ field }: { field: IFieldList }) => {
  const { register } = useForm();
  const { type, label, id } = field;
  const registeredID = register(id);
  return (
    <>
      <div style={{ marginBottom: "2rem" }}>
        <MDBInput type={type} label={label} width={"100%"} {...registeredID} />
      </div>
    </>
  );
};
