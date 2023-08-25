export interface RootState {
  form: IFormState;
}

interface IFormState {
  formValues: Record<string, any>;
  currentStep: number;
  formID: string;
  steps: [];
  loading: boolean;
  error: string;
}
