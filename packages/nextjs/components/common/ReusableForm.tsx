import React, { FC } from "react";
import { Dropdown } from "./Dropdown";
import { FormType } from "~~/types/form.type";

type Props = {
  formData: FormType[];
  onSubmit?: (event: React.FormEvent<HTMLFormElement>) => void;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export const ReusableForm: FC<Props> = ({ formData, onSubmit, onChange }) => {
  return (
    <form className=" rounded px-8 pb-8 mb-4">
      <div className="row d-flex justify-content-around align-items-center">
        <div className="row d-flex justify-content-between align-items-center py-5 col-xxl-9 col-lg-10 col-xl-10">
          {formData.map((field: FormType) => (
            <div key={field.name} className="">
              <label className="block text-gray-700 text-sm font-bold my-2" htmlFor={field.name}>
                {field.label}
              </label>
              <input
                type={field.type}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                name={field.name}
                value={field.value.toString()}
                id={field.name}
                //onChange={() => {}}
              />
              {field.type === "select" && (
                <div>
                  <label className="block text-gray-700 text-sm font-bold my-2" htmlFor={field.name}>
                    {field.label}
                  </label>
                  <Dropdown
                    items={!!field.options ? field.options : []}
                    name={field.name}
                    value={0}
                    onChange={() => {}}
                  />
                </div>
              )}
            </div>
          ))}
        </div>
        <button
          className=" bg-sky-300 hover:bg-sky-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="button"
          disabled={false}
        >
          Invest
        </button>
        {/* <GenericButton
          iconPath='/media/icons/duotune/general/gen031.svg'
          color='primary'
          onClick={onSubmit}
          label='Filtrar'
          className='mt-xxl-7 mw-25 col-xxl-2 col-xl-12 col-lg-12 mx-10
           col-md-12 align-self-center'
          disabled={false}
        /> */}
      </div>
    </form>
  );
};
