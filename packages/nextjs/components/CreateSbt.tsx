// import { useReducer } from "react";
import Link from "next/link";
import { ReusableForm } from "./common/ReusableForm";
import { MintSbt } from "~~/data/mintSbt";

// interface FormState {
//   name: string;
//   email: string;
//   country: string;
// }

// type FormAction = { type: "SET_FIELD"; field: string; value: string } | { type: "RESET" };

// const initialState: FormState = {
//   name: "",
//   email: "",
//   country: "",
// };

// const formReducer = (state: FormState, action: FormAction): FormState => {
//   switch (action.type) {
//     case "SET_FIELD":
//       return {
//         ...state,
//         [action.field]: action.value,
//       };
//     case "RESET":
//       return initialState;
//     default:
//       return state;
//   }
// };

const CreateSbt = () => {
  // const [formData, dispatch] = useReducer(formReducer, initialState);

  // const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const { name, value } = e.target;
  //   dispatch({ type: "SET_FIELD", field: name, value });
  // };

  // const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   console.log("Datos del formulario:", formData);
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
            Go Back
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CreateSbt;
