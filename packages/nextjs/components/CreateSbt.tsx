import { useReducer } from "react";
import Link from "next/link";
import { ReusableForm } from "./common/ReusableForm";
import { PrivateKeyAccount } from "viem";
import { ArrowLeftIcon } from "@heroicons/react/20/solid";
import { useScaffoldContractWrite } from "~~/hooks/scaffold-eth";
import { FormType } from "~~/types/form.type";

interface FormState {
  name: string;
  email: string;
  country: string;
}

type FormAction = { type: "SET_FIELD"; field: string; value: string } | { type: "RESET" };

const initialState: FormState = {
  name: "",
  email: "",
  country: "",
};

const formReducer = (state: FormState, action: FormAction): FormState => {
  switch (action.type) {
    case "SET_FIELD":
      return {
        ...state,
        [action.field]: action.value,
      };
    case "RESET":
      return initialState;
    default:
      return state;
  }
};

interface propsAccount {
  account: PrivateKeyAccount | undefined;
}

const CreateSbt = ({ account }: propsAccount) => {
  const [formData, dispatch] = useReducer(formReducer, initialState);
  const MintSbt: FormType[] = [
    {
      label: "Organization's name",
      type: "text",
      value: formData.name,
      name: "name",
    },
    {
      label: "Organization's email",
      type: "text",
      value: formData.email,
      name: "email",
    },
    {
      label: "Country",
      type: "text",
      value: formData.country,
      name: "country",
    },
  ];
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    dispatch({ type: "SET_FIELD", field: name, value });
  };

  const { writeAsync, isLoading } = useScaffoldContractWrite({
    contractName: "UmaIrpiri",
    functionName: "crearUmaSBT",
    args: [account?.address, formData.name, formData.country, BigInt(1)],
    // value: "0.01",
    onBlockConfirmation: (txnReceipt: { blockHash: any }) => {
      console.log("📦 Transaction blockHash", txnReceipt.blockHash);
    },
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Datos del formulario:", formData);
    writeAsync();
    debugger;
  };

  const setDisabled = () => {
    return (formData.country !== "" && formData.email !== "" && formData.name !== "") || isLoading;
  };
  return (
    <div className="bg-white text-gray p-10 absolute rounded-lg">
      <h1 className="text-2xl mt-4 text-center">CREA TU SBT</h1>
      <p className="w-72 text-center my-0">Necesitamos que crees un SBT para registrar las propuestas de proyectos</p>
      <div className="mx-auto">
        <ReusableForm
          formData={MintSbt}
          onSubmit={handleSubmit}
          onChange={handleInputChange}
          buttonLabel="Next"
          disabled={!setDisabled()}
        />
      </div>
      <div className="inline-flex ml-8 mt-[20px]">
        <Link className="text-red-500 hover:text-red-700 underline" href={"/"}>
          Go Back
          <ArrowLeftIcon className="h-4 w-4" />
        </Link>
      </div>
    </div>
  );
};

export default CreateSbt;
