import { FormType } from "~~/types/form.type";

export const RegisterProjectForm: FormType[] = [
  {
    label: "Community Name",
    type: "text",
    name: "community",
    value: "",
  },
  {
    label: "Location",
    type: "text",
    name: "location",
    value: "",
  },
  {
    label: "Amount Needed (USD)",
    type: "number",
    name: "location",
    value: "",
  },
  {
    label: "Water Contamination Percentage (%)",
    type: "number",
    name: "location",
    value: "",
  },
  {
    label: "Contamination Type",
    type: "select",
    name: "contamination",
    value: 0,
    options: [
      {
        id: 1,
        name: "Physical",
        value: 1,
      },
      {
        id: 2,
        name: "Physical",
        value: 2,
      },
    ],
  },
];
