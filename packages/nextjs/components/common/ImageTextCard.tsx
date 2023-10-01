import React, { FC } from "react";
import Image from "next/image";

type Props = {
  title: string;
  image: string;
  description: string;
  waterPurity: number;
  saving: number;
  setButton?: boolean;
};

export const ImageTextCard: FC<Props> = ({ title, image, description, waterPurity, saving, setButton = false }) => {
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
        <div className="flex flex-row justify-between">
          <div className="font-bold text-xl">{title}</div>
          {setButton && (
            <button className="flex flex-row bg-cyan-200 hover:bg-cyan-100 text-gray-800 font-bold px-4 rounded inline-flex items-center">
              Finish
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
                />
              </svg>
            </button>
          )}
        </div>
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
