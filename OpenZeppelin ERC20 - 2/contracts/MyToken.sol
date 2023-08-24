// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "./SafeMath.sol";

contract MyToken is ERC20, Ownable{
    constructor() ERC20("MyToken", "MTK") {
    }
    function mint(address account, uint256 amount) public {
        require(account == msg.sender);
        _mint(account, amount);
    }

    function burn(address account, uint256 amount) public onlyOwner {
        _burn(account, amount);
    }
}
