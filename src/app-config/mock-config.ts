import * as yup from "yup";
const mockSectionForm = [
  {
    sectionName: "Personal Information",
    sectionID: "personal-info",
    fieldList: [
      {
        id: "first_name",
        type: "text",
        component: "text-field",
        label: "First Name",
        required: true,
        defaultValue: "",
        hidden: false,
        value: "",
        placeholder: "Write your First Name...",
        style: {
          width: "100%",
        },
        validation: yup.string().required("First Name is required"),
      },
      {
        id: "last_name",
        type: "text",
        component: "text-field",
        label: "Last Name",
        required: true,
        defaultValue: "",
        hidden: false,
        value: "",
        placeholder: "Write your Last Name...",
        style: {
          width: "100%",
        },
        validation: yup.string().required("Last Name is required"),
      },
    ],
  },
  {
    sectionName: "Contact Information",
    sectionID: "contact-info",
    fieldList: [
      {
        id: "email",
        type: "email",
        component: "text-field",
        label: "Email",
        required: true,
        defaultValue: "",
        hidden: false,
        value: "",
        placeholder: "",
        style: {
          width: "100%",
        },
        validation: yup
          .string()
          .email("Invalid email")
          .required("Email is required"),
      },
      {
        id: "address",
        type: "text",
        component: "text-field",
        label: "Address",
        required: false,
        defaultValue: "",
        value: "",
        placeholder: "",
        hidden: {
          when: "email",
          is: (value: string) => !value,
        },
        style: {
          width: "100%",
        },
        validation: yup
          .string()
          .required()
          .when("email", {
            is: (value: string) => !!value,
            then: (schema: yup.AnyObjectSchema) =>
              schema.required("Address is required"),
            otherwise: (schema: yup.AnyObjectSchema) => schema.notRequired(),
          }),
      },
    ],
  },
];

export const basicMockForm = {
  formID: "basic-form",
  type: "form",
  steps: [
    {
      id: "first-step",
      label: "Application Form",
      component: "ApplicationForm",
    },
    {
      id: "review-step",
      label: "Review",
      component: "ReviewPage",
    },
    {
      id: "final-step",
      label: "Success",
      component: "SucessPage",
    },
  ],
  formSections: [...mockSectionForm],
  buttons: [
    {
      label: "Next",
      action: "next",
      style: {},
    },
  ],
};
