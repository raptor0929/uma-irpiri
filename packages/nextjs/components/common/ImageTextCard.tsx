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
    <div className="max-w-sm rounded overflow-hidden shadow-lg m-3" style={{ height: "35rem" }}>
      <Image
        src={image}
        alt="Picture of the author"
        quality={100}
        width={500}
        height={500}
        style={{ minHeight: "20rem" }}
      />{" "}
      <div className="px-6 pt-4">
        <div className="font-bold text-xl">{title}</div>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
      <div className="grid grid-flow-col grid-cols-2 gap-2 items-center mx-3">
        <div className="m-4">
          <div className="flex text-black justify-between mb-1">
            <span className="font-medium">Saving</span>
            <span className="text-sm font-medium ">{saving}%</span>
          </div>
          <div className="w-full bg-zinc-400 rounded-full h-2.5 ">
            <div className="bg-violet-100 h-2.5 rounded-full" style={{ width: `${saving}%` }}></div>
          </div>
        </div>
        <div className="m-4">
          <div className="flex text-black justify-between mb-1">
            <span className="font-medium">Water Purity</span>
            <span className="text-sm font-medium ">{waterPurity}%</span>
          </div>
          <div className="w-full bg-zinc-400	 rounded-full h-2.5">
            <div className="bg-sky-200 h-2.5 rounded-full" style={{ width: `${waterPurity}%` }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};
