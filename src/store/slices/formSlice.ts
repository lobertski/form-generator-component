import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  formValues: {},
  currentStep: 0,
  formID: "",
  steps: [],
  loading: false,
  error: "",
};

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    setFormValue: (state, action) => {
      state.formValues = action.payload;
    },
    setCurrentStep: (state, action) => {
      state.currentStep = action.payload;
    },
    setStepForm: (state, action) => {
      state.currentStep = action.payload;
    },
    setFirstMount: (state, action) => {
      const { formID, steps } = action.payload;
      state.formID = formID;
      state.steps = steps;
    },
    submitFormRequest: (state, action) => {
      state.formValues = action.payload;
      state.loading = true;
    },
    submitFormSuccess: (state) => {
      state.loading = false;
    },
    submitFormError: (state, { payload }) => {
      state.error = payload;
      state.loading = false;
    },
  },
});

export const {
  setCurrentStep,
  setStepForm,
  setFormValue,
  setFirstMount,
  submitFormError,
  submitFormRequest,
  submitFormSuccess,
} = formSlice.actions;
export default formSlice.reducer;
