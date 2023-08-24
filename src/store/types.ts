export interface RootState {
  form: IFormState;
}

interface IFormState {
  formValues: [];
  currentStep: number;
  formID: string;
  steps: [];
}
