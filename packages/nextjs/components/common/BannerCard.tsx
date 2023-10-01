import Image from "next/image";

//size, image
export const BannerCard = () => {
  return (
    <div className="w-100 bg-white relative ">
      <Image className="rounded-lg " src="/Assets/amazonas.jpeg" alt="" width={1200} height={0} />{" "}
      <div className="rounded-b-lg font-mono text-3xl text-center text-slate-50 backdrop-blur-sm bg-white/30 absolute bottom-0 right-0 left-0">
        <p>Absolute child</p>
      </div>
    </div>
  );
};
