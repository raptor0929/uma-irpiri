// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "./QuadraticFunding.sol";

contract Staking {

    address public quadraticFundingAddress;

    constructor (address _quadraticFundingAddress) {
        quadraticFundingAddress = _quadraticFundingAddress;
    }

    uint256 public TotalStakedFunds;

    function withdrawStakedEth() public {
        (bool success, ) = quadraticFundingAddress.call{value: TotalStakedFunds}("");
        require(success, "Withdrawal from Staking contract failed");
    }

    function stakeFunds() public payable {
        TotalStakedFunds += msg.value;
    }

}



