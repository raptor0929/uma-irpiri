import React from "react";
import { BannerCard } from "~~/components/common/BannerCard";
import { ProgressBar } from "~~/components/common/ProgressBar";
import { ReusableForm } from "~~/components/common/ReusableForm";
import { ChooseProjectForm } from "~~/data/chooseProjectForm";
// Importa los estilos básicos de Swiper

// Instala los módulos necesarios

const progress = [
  {
    title: "Saving",
    progress: 40,
    color: "yellow",
  },
  {
    title: "Water Purity",
    progress: 40,
    color: "yellow",
  },
];

const InvestInProject = () => {
  return (
    <div className="flex justify-center flex-row flex-wrap ">
      <div className=" m-5">
        <BannerCard size={500} title="this project" textSize="md" />
        <div className=" bg-white shadow-md my-5 rounded-lg p-5">
          {progress.map((x): any => {
            return (
              <div className="py-5" key={x.title}>
                <ProgressBar title={x.title} color={x.color} progress={x.progress} />
              </div>
            );
          })}
        </div>
      </div>
      <div className="bg-white shadow-md mt-5 rounded-lg" style={{ height: "32.3rem", width: "32rem" }}>
        <h2 className=" text-center text-2xl pt-5">Invest in Project</h2>
        <ReusableForm formData={ChooseProjectForm} buttonLabel="Invest"/>
      </div>
    </div>
  );
};

export default InvestInProject;
