import React, { FC } from "react";
import Image from "next/image";

type Props = {
  title: string;
  image: string;
  description: string;
  waterPurity: number;
  saving: number;
};

export const ImageTextCard: FC<Props> = ({ title, image, description, waterPurity, saving }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg m-3">
      <Image src={image} alt="Picture of the author" width={500} height={500} quality={100} />{" "}
      <div className="px-6 pt-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
      <div className="grid grid-flow-col grid-cols-2 gap-2 items-center m-3">
        <div className="m-4">
          <div className="flex text-black justify-between mb-1">
            <span className="font-medium">Saving</span>
            <span className="text-sm font-medium ">{saving}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
            <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: `${saving}` }}></div>
          </div>
        </div>
        <div className="m-4">
          <div className="flex text-black justify-between mb-1">
            <span className="font-medium">Water Purity</span>
            <span className="text-sm font-medium ">{waterPurity}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
            <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: `${waterPurity}` }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};
