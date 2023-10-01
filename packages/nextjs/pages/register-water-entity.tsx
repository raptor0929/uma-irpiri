import Image from "next/image";
import { ReusableForm } from "~~/components/common/ReusableForm";
import { RegisterProjectForm } from "~~/data/registerProjectForm";

const ChooseWatterEntity = () => {
  return (
    <div className="flex justify-center flex-row flex-wrap py-5">
      <div className="bg-white shadow-md mt-5 rounded-lg" style={{ height: "32.3rem", width: "32rem" }}>
        <h2 className=" text-center text-2xl pt-5">Register Water Entity</h2>
        <ReusableForm formData={RegisterProjectForm} buttonLabel="Register" />
      </div>
      <div className="m-5 shadow-md bg-white rounded-lg p-6 cursor-crosshair">
        <Image className="rounded-lg " src="/Assets/map.png" alt="" width={500} height={0} />
      </div>
    </div>
  );
};
export default ChooseWatterEntity;
