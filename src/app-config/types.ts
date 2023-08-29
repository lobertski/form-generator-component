import { AnySchema } from "yup";
export interface IFieldList {
  id: string;
  type: string;
  component: string;
  label: string;
  required: boolean;
  defaultValue: string;
  value: string;
  placeholder: string;
  style: {
    width: string;
  };
  validation: AnySchema;
}

export interface IButtons {
  label: string;
  action: string;
  style: Record<string, unknown>;
}

export interface ISection {
  sectionName: string;
  sectionID: string;
  fieldList: IFieldList[];
}

export interface IForm {
  formID: string;
  type: string;
  steps: {
    id: string;
    label: string;
    component: string;
  }[];
  formSections: ISection[];
  buttons: IButtons[];
}
