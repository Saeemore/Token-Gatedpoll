// SPDX-License-Identifier: MIT
pragma solidity ^0.8.29;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract MembershipNFT is ERC721, Ownable {
    uint256 private _nextTokenId;

    constructor(address initialOwner) ERC721("MembershipNFT", "MNFT") Ownable(initialOwner) {}

    // Public mint function - users mint for themselves
    function mint() public {
        _safeMint(msg.sender, _nextTokenId);
        _nextTokenId++;
    }

    // Admin mint function - owner can mint for others
    function safeMint(address to) public onlyOwner {
        _safeMint(to, _nextTokenId);
        _nextTokenId++;
    }
}
