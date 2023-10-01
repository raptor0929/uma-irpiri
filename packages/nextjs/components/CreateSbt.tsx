import Link from "next/link";
import { ReusableForm } from "./common/ReusableForm";
import { MintSbt } from "~~/data/mintSbt";

const CreateSbt = () => {
  // const [modalOpen, setModalOpen] = useState(false);

  // const openModal = () => {
  //   setModalOpen(true);
  // };

  // const closeModal = () => {
  //   setModalOpen(false);
  // };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="fixed inset-0 bg-black opacity-50"></div>

      <div className="bg-white text-gray p-10 absolute rounded-lg">
        <h1 className="text-2xl mt-4 text-center">CREA TU SBT</h1>
        <p className="w-72 text-center my-0">Necesitamos que crees un SBT para registrar las propuestas de proyectos</p>
        <div className="mx-auto">
          <ReusableForm formData={MintSbt} />
        </div>
        <div className="ml-8 mt-[-20px]">
          <Link className="text-red-500 hover:text-red-700 underline" href={"/"}>
            Volver
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CreateSbt;
