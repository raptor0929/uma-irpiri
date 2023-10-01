import { FC } from "react";
import Image from "next/image";

type Props = {
  size?: number;
  title?: string;
  textSize?: string;
};
//size, image
export const BannerCard: FC<Props> = ({ size = 1200, title = "good project", textSize = "3xl" }) => {
  return (
    <div className="w-100 bg-white relative ">
      <Image className="rounded-lg " src="/Assets/amazonas.jpeg" alt="" width={size} height={0} />
      <div
        className={`rounded-b-lg font-mono text-${textSize} text-center text-slate-50 backdrop-blur-sm bg-white/30 absolute bottom-0 right-0 left-0`}
      >
        <p>{title}</p>
      </div>
    </div>
  );
};
