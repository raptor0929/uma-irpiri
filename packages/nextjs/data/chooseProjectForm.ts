import { FormType } from "~~/types/form.type";

export const ChooseProjectForm: FormType[] = [
  {
    label: "Company",
    type: "text",
    value: "",
    name: "company",
  },
  {
    label: "Investment",
    type: "number",
    value: 0,
    name: "investment",
  },
  {
    label: "Project",
    type: "select",
    value: 0,
    name: "project",
    options: [
      {
        id: 1,
        name: "project one",
        value: 0,
      },
      {
        id: 2,
        name: "project two",
        value: 2,
      },

      {
        id: 3,
        name: "project three",
        value: 3,
      },
    ],
  },
];
