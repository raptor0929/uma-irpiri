import React, { FC } from "react";
import { Dropdown } from "./Dropdown";
import { FormType } from "~~/types/form.type";

type Props = {
  formData: FormType[];
  onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  buttonLabel: string;
  disabled: boolean;
};

export const ReusableForm: FC<Props> = ({ formData, buttonLabel, onChange, onSubmit, disabled }) => {
  return (
    <form className="h-full px-9">
      <div className="flex flex-col justify-between align-middle">
        <div className="flex justify-between flex-col content-center align-middle mb-5">
          {formData.map((field: FormType) => (
            <div key={field.name} className="my-3">
              <label className="block text-gray-700 text-sm font-bold my-2" htmlFor={field.name}>
                {field.label}
              </label>

              {field.type === "select" ? (
                <div>
                  <Dropdown
                    items={!!field.options ? field.options : []}
                    name={field.name}
                    value={!!field.value ? (field.value as number) : 0}
                    onChange={onChange}
                  />
                </div>
              ) : (
                <input
                  type={field.type}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  name={field.name}
                  value={field.value.toString()}
                  id={field.name}
                  onChange={onChange}
                />
              )}
            </div>
          ))}
        </div>
        <button
          className="disabled:opacity-50 disabled:cursor-not-allowed bg-sky-300 hover:bg-sky-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-5"
          type="button"
          disabled={disabled}
          onClick={(event: any) => onSubmit(event)}
        >
          {buttonLabel}
        </button>
      </div>
    </form>
  );
};
