// SPDX-License-Identifier: MIT
pragma solidity ^0.8.29;

interface IMembershipNFT {
    function balanceOf(address owner) external view returns (uint256);
}

contract Poll {
    IMembershipNFT public membershipNFT;
    string public question;
    string[] public options;
    mapping(address => bool) public hasVoted;
    mapping(uint256 => uint256) public votes;

    constructor(address membershipNFTAddress, string memory _question, string[] memory _options) {
        membershipNFT = IMembershipNFT(membershipNFTAddress);
        question = _question;
        options = _options;
    }

    function vote(uint256 optionIndex) external {
        require(membershipNFT.balanceOf(msg.sender) > 0, "Not a member");
        require(!hasVoted[msg.sender], "Already voted");
        require(optionIndex < options.length, "Invalid option");

        hasVoted[msg.sender] = true;
        votes[optionIndex]++;
    }

    function getOptions() external view returns (string[] memory) {
        return options;
    }
}
