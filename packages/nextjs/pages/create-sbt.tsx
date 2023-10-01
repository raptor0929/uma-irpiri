import CreateSbt from "~~/components/CreateSbt";
import { useBurnerWallet } from "~~/hooks/scaffold-eth";

const CreateSbtPage = () => {
  const { account } = useBurnerWallet();
  return (
    <div className="flex justify-center flex-row flex-wrap py-5">
      <CreateSbt account={account} />
    </div>
  );
};
export default CreateSbtPage;
