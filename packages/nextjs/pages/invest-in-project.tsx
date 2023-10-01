import { ReusableForm } from "~~/components/common/ReusableForm";
import { ChooseProjectForm } from "~~/data/chooseProjectForm";

const InvestInProject = () => {
  return (
    <div className="flex justify-center items-start  flex-row flex-wrap">
      <div className="p-10">qwert</div>
      <div className="w-full max-w-xs bg-white shadow-md m-10">
        <h2 className=" text-center pt-5">Invest in Project</h2>
        <ReusableForm formData={ChooseProjectForm} />
      </div>
    </div>
  );
};

export default InvestInProject;
