import type { NextPage } from "next";
import { MetaHeader } from "~~/components/MetaHeader";
import { ReusableCard } from "~~/components/common/Card";

const Home: NextPage = () => {
  return (
    <>
      <MetaHeader />
      <div className="flex items-center flex-col flex-grow pt-5">
        <ReusableCard />
      </div>
    </>
  );
};

export default Home;
{
  /* <div className="flex justify-center items-center gap-12 flex-col sm:flex-row">
  <div className="flex flex-col bg-base-100 px-10 py-10 text-center items-center max-w-xs rounded-3xl">
    <MagnifyingGlassIcon className="h-8 w-8 fill-secondary" />
    <p>
      Explore your local transactions with the{" "}
      <Link href="/blockexplorer" passHref className="link">
        Block Explorer
      </Link>{" "}
      tab.
    </p>
  </div>
</div>; */
}
