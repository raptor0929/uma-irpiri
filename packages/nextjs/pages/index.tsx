import type { NextPage } from "next";
import { MetaHeader } from "~~/components/MetaHeader";
import { BannerCard } from "~~/components/common/BannerCard";
import { ImageTextCard } from "~~/components/common/ImageTextCard";

const cards = [
  {
    index: 1,
    title: "bad river",
    image: "/assets/bad-1.jpeg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.",
    waterPurity: 45,
    saving: 80,
  },
  {
    index: 2,
    title: "bad river",
    image: "/assets/bad-2.jpeg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.",
    waterPurity: 45,
    saving: 80,
  },
  {
    index: 3,
    title: "bad river",
    image: "/assets/bad-3.jpeg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.",
    waterPurity: 45,
    saving: 80,
  },
  {
    index: 4,
    title: "bad river",
    image: "/assets/bad-2.jpeg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.",
    waterPurity: 45,
    saving: 80,
  },
  {
    index: 5,
    title: "bad river",
    image: "/assets/bad-3.jpeg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.",
    waterPurity: 45,
    saving: 80,
  },
  {
    index: 6,
    title: "bad river",
    image: "/assets/bad-1.jpeg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.",
    waterPurity: 45,
    saving: 80,
  },
];
const Home: NextPage = () => {
  return (
    <>
      <MetaHeader />
      <div className="flex items-center flex-col flex-grow pt-5 m-auto">
        <div className="pb-5">
          <BannerCard />
        </div>
        <div className="flex justify-center items-start  flex-row flex-wrap">
          {cards.map(x => (
            <div key={x.index}>
              <ImageTextCard
                title={x.title}
                image={x.image}
                description={x.description}
                waterPurity={x.waterPurity}
                saving={x.saving}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
