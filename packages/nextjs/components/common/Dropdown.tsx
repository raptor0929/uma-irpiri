import React, { FC } from "react";
import { OptionType } from "~~/types/form.type";

type Props = {
  items: Array<OptionType>;
  onChange: any;
  value?: number;
  name?: string;
};
export const Dropdown: FC<Props> = ({ items = [], onChange, name, value = 0 }) => {
  return (
    <select
      className="shadow border rounded w-full py-3 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-gray-200 "
      id="default"
      onChange={onChange}
      name={name}
      value={value}
    >
      {items.map(x => (
        <option key={x.name} value={x.id}>
          {x.name}
        </option>
      ))}
    </select>
  );
};
