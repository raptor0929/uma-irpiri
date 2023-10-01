import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";

/**
 * Deploys a contract named "UmaToken" using the deployer account and
 * constructor arguments set to the deployer address
 *
 * @param hre HardhatRuntimeEnvironment object.
 */
const deployUmaTokens: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployer } = await hre.getNamedAccounts();
  const { deploy } = hre.deployments;

  console.log("Deploying contracts with the account:", deployer);

  console.log("Deploying UmaToken contract");
  await deploy("UmaToken", {
    from: deployer,
    // Contract constructor arguments
    args: [],
    log: true,
    autoMine: true,
  });

  console.log("UmaToken contract deployed");

  console.log("Deploying UmaSBT contract");
  await deploy("UmaSBT", {
    from: deployer,
    // Contract constructor arguments
    args: [],
    log: true,
    autoMine: true,
  });

  console.log("UmaSBT contract deployed");

  // Get the deployed contracts
  const umaToken = await hre.ethers.getContract("UmaToken", deployer);
  const UmaSBT = await hre.ethers.getContract("UmaSBT", deployer);

  console.log("Deploying UmaIrpiri contract");
  await deploy("UmaIrpiri", {
    from: deployer,
    // Contract constructor arguments
    args: [umaToken.address, UmaSBT.address],
    log: true,
    autoMine: true,
  });

  console.log("UmaIrpiri contract deployed");
};

export default deployUmaTokens;

// Tags are useful if you have multiple deploy files and only want to run one of them.
// e.g. yarn deploy --tags YourContract
deployUmaTokens.tags = ["UmaToken", "UmaSBT", "UmaIrpiri"];
