// SPDX-License-Identifier: MIT
pragma solidity 0.8.19;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract UmaToken is ERC20, Ownable {
    constructor() ERC20("Uma Token", "UMAT") {
        //_mint(msg.sender, 100000000000000000000000000000000 * 10 ** decimals()); //? 
    }

    function mint(address to, uint256 amount) public {
        _mint(to, amount);
    }
}