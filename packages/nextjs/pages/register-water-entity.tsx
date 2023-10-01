import { useState } from "react";
import Image from "next/image";
import CreateSbt from "~~/components/CreateSbt";
import { ReusableForm } from "~~/components/common/ReusableForm";
import { FormType } from "~~/types/form.type";

interface FormValues {
  community: string;
  location: string;
  contamination: number;
  amount: number;
  contaminationType: number;
}
const ChooseWatterEntity = () => {
  const [formData, setFormData] = useState<FormValues>({
    community: "",
    location: "",
    amount: 0,
    contamination: 0,
    contaminationType: 1,
  });

  const RegisterProjectForm: FormType[] = [
    {
      label: "Community Name",
      type: "text",
      name: "community",
      value: formData.community,
    },
    {
      label: "Location",
      type: "text",
      name: "location",
      value: formData.location,
    },
    {
      label: "Amount Needed (USD)",
      type: "number",
      name: "amount",
      value: formData.amount,
    },
    {
      label: "Water Contamination Percentage (%)",
      type: "number",
      name: "contamination",
      value: formData.contamination,
    },
    {
      label: "Contamination Type",
      type: "select",
      name: "contaminationType",
      value: formData.contaminationType,
      options: [
        {
          id: 1,
          name: "Physical",
          value: 1,
        },
        {
          id: 2,
          name: "Chemical",
          value: 2,
        },
      ],
    },
  ];
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

  const setDisable = () => {
    return (
      formData.amount !== 0 && formData.community !== "" && formData.contamination !== 0 && formData.location !== ""
    );
  };
  return (
    <div className="flex justify-center flex-row flex-wrap py-5">
      <div className="bg-white shadow-md mt-5 rounded-lg" style={{ height: "42rem", width: "32rem" }}>
        <h2 className=" text-center text-2xl pt-5">Register Water Entity</h2>
        <ReusableForm
          formData={RegisterProjectForm}
          buttonLabel="Register"
          onChange={handleChange}
          onSubmit={handleSubmit}
          disabled={!setDisable()}
        />
      </div>
      <div className="flex m-5 shadow-md bg-white rounded-lg p-6 cursor-crosshair" style={{ height: "42rem" }}>
        <Image className="rounded-lg " src="/Assets/map.png" alt="" width={500} height={0} />
      </div>
      <CreateSbt />
    </div>
  );
};
export default ChooseWatterEntity;
