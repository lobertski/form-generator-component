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
        value: "",
        placeholder: "Write your First Name...",
        style: {
          width: "100%",
        },
        rules: [],
      },
      {
        id: "last_name",
        type: "text",
        component: "text-field",
        label: "Last Name",
        required: true,
        defaultValue: "",
        value: "",
        placeholder: "Write your Last Name...",
        style: {
          width: "100%",
        },
        rules: [],
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
        value: "",
        placeholder: "",
        style: {
          width: "100%",
        },
        rules: [],
      },
      {
        id: "address",
        type: "text",
        component: "text-field",
        label: "Address",
        required: true,
        defaultValue: "",
        value: "",
        placeholder: "",
        style: {
          width: "100%",
        },
        rules: [],
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
