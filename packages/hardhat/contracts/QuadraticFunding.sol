// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "./UmaIrpiri.sol";
import "./Staking.sol";

contract QuadraticFunding {

    UmaIrpiri public umaIrpiri; 
    Staking public staking;
    address public stakingAddress;

     constructor(address _umaIrpiriAddress, address _stakingAddress) {
        umaIrpiri = UmaIrpiri(_umaIrpiriAddress);
        staking = Staking(_stakingAddress);
        stakingAddress = _stakingAddress;
    }

    function getContractBalance() public view returns (uint256) {
        return address(this).balance;
    }

    mapping(uint256 => uint256[]) public finale;
    uint256[] public totals;
    uint256[] public square;

    // UmaIrpiri.Proyecto[] public projects;

    uint256[] public fundingAllocation;

    uint256 public TotalMatchingFund;
    uint256 public NoOfContributors;

    mapping(uint256 => mapping(address => bool)) public userhasVoted;

    mapping(uint256 => uint256[]) public votes;

    address[] public voters;

    mapping(address => uint256) public MatchingFundContributor;

    uint256 public numProy;

    //**************** Square root function from Uniswap repo */

    function Sqrt(uint256 y) public pure returns (uint256 z) {
        if (y > 3) {
            z = y;
            uint256 x = y / 2 + 1;
            while (x < z) {
                z = x;
                x = (y / x + x) / 2;
            }
        } else if (y != 0) {
            z = 1;
        }
    }


    function calculator(uint256 pId) public {
        uint256[] memory values = votes[pId];
        for (uint256 i; i < values.length; i++) {
            uint256 root = Sqrt(values[i]);
            finale[pId].push(values[i]);
            totals[pId] += root;
        }

        square[pId] = totals[pId] * totals[pId];
    }

    function depositFunds(address investorAccount) public payable {
        MatchingFundContributor[investorAccount] += msg.value;
        TotalMatchingFund += msg.value;
        // Stake the received ETH to the "staking" contract
        // (bool success, ) = stakingAddress.call{value: msg.value}("");
        // require(success, "Transfer to staking contract failed");
        staking.stakeFunds{value: msg.value}();
    }

    function CalculateAllocation() public returns (uint256[] memory) {
        uint256 totalSquares = 0;
        // UmaIrpiri.Proyecto[] storage projects = umaIrpiri.projectList;
        numProy = umaIrpiri.getNumProy();
        for (uint256 i = 0; i < numProy; i++) {
            calculator(i);
            totalSquares += square[i];
        }
        for (uint256 i; i < numProy; i++) {
            fundingAllocation[i] = (square[i] * TotalMatchingFund) / totalSquares;
        }
        staking.withdrawStakedEth();
        lotteryExcedentEth();
        assignEthToProjects();
        return fundingAllocation;
    }

    function lotteryExcedentEth() public {
        require(voters.length > 0, "No voters available for the lottery");

        // Use block number as a source of randomness
        uint256 blockNumber = block.number;
        uint256 randomIndex = blockNumber % voters.length;
        address winner = voters[randomIndex];

        uint256 excedentEth = getContractBalance() - TotalMatchingFund;
        (bool success, ) = winner.call{value: excedentEth}("");
        require(success, "Send Eth to the winner failed");
    }

    function assignEthToProjects() public {
        // UmaIrpiri.Proyecto[] memory projects = umaIrpiri.projectList;
        numProy = umaIrpiri.getNumProy();
        for (uint256 i = 0; i < numProy; i++) {
            (bool success, ) = umaIrpiri.accessProjectAtIndex(i).wallet.call{value: fundingAllocation[i]}("");
            require(success, "Send Eth to the project failed");
        }
    }

    // mapping(uint256 => mapping(address => bool)) public userhasVoted;
    // mapping(uint256 => uint256[]) public votes;
    // address[] public voters;

    function castVote(uint256 pId, uint numTokens) external {
        if (!userhasVoted[pId][msg.sender]) {
            votes[pId].push(numTokens);
            voters.push(msg.sender);
        }
}
}
