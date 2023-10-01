import React, { useState } from "react";
import { BannerCard } from "~~/components/common/BannerCard";
import { ProgressBar } from "~~/components/common/ProgressBar";
import { ReusableForm } from "~~/components/common/ReusableForm";
import { FormType } from "~~/types/form.type";

const progress = [
  {
    title: "Saving",
    progress: 40,
    color: "yellow",
  },
  {
    title: "Water Purity",
    progress: 40,
    color: "yellow",
  },
];
interface FormValues {
  company: string;
  investment: number;
  project: number;
}
const InvestInProject = () => {
  const [formData, setFormData] = useState<FormValues>({
    company: "",
    investment: 0,
    project: 1,
  });

  const ChooseProjectForm: FormType[] = [
    {
      label: "Company",
      type: "text",
      value: formData.company,
      name: "company",
    },
    {
      label: "Amount to Invest",
      type: "number",
      value: formData.investment,
      name: "investment",
    },
    {
      label: "Project",
      type: "select",
      value: formData.project,
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
  const setDisable = () => {
    return formData.company != "" && formData.investment != 0;
  };

  const handleChange = (event: any) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    console.log(formData);
  };

  return (
    <div className="flex justify-center flex-row flex-wrap ">
      <div className=" m-5">
        <BannerCard size={500} title="this project" textSize="md" />
        <div className=" bg-white shadow-md my-5 rounded-lg p-5">
          {progress.map((x): any => {
            return (
              <div className="py-5" key={x.title}>
                <ProgressBar title={x.title} color={x.color} progress={x.progress} />
              </div>
            );
          })}
        </div>
      </div>
      <div className="bg-white shadow-md mt-5 rounded-lg" style={{ height: "32.3rem", width: "32rem" }}>
        <h2 className=" text-center text-2xl pt-5">Invest in Project</h2>
        <ReusableForm
          formData={ChooseProjectForm}
          buttonLabel="Invest"
          onChange={handleChange}
          onSubmit={handleSubmit}
          disabled={!setDisable()}
        />
      </div>
    </div>
  );
};

export default InvestInProject;
