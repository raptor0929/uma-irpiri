import React, { FC } from "react";

type Props = {
  title: string;
  progress: number;
  color: string;
};
export const ProgressBar: FC<Props> = ({ title, progress, color = "blue" }) => {
  return (
    <>
      <div className="flex justify-between mb-1">
        <span className="text-base font-medium text-gray-600">{title}</span>
        <span className="text-sm font-medium text-gray-600">{progress}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5">
        <div className={`bg-${color}-400 h-2.5 rounded-full`} style={{ width: `${progress}%` }}></div>
      </div>
    </>
  );
};
