import React, { FC } from "react";
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
            <div key={field.name} className={`' mt-md-3`}>
              <label className="form-label text-muted fs-6 fw-bold" htmlFor={field.name}>
                {field.label}
              </label>
              <input
                type={field.type}
                className="form-control form-control-lg form-control-solid"
                name={field.name}
                value={field.value.toString()}
                //onChange={() => {}}
              />
            </div>
          ))}
        </div>
        <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
          Button
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
