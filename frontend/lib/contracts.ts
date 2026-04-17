import { Abi } from "viem";
import { deployment } from "./deployment";

export const localChainId = deployment.chainId;
export const localRpcUrl =
  process.env.NEXT_PUBLIC_RPC_URL?.trim() || deployment.rpcUrl || "http://127.0.0.1:8545";
export const membershipAddress =
  process.env.NEXT_PUBLIC_MEMBERSHIP_ADDRESS || deployment.membershipAddress;
export const pollAddress = process.env.NEXT_PUBLIC_POLL_ADDRESS || deployment.pollAddress;

export const membershipAbi: Abi = [
  {
    type: "function",
    name: "balanceOf",
    stateMutability: "view",
    inputs: [{ name: "owner", type: "address" }],
    outputs: [{ name: "", type: "uint256" }],
  },
  {
    type: "function",
    name: "mint",
    stateMutability: "nonpayable",
    inputs: [],
    outputs: [],
  },
  {
    type: "function",
    name: "safeMint",
    stateMutability: "nonpayable",
    inputs: [{ name: "to", type: "address" }],
    outputs: [],
  },
];

export const pollAbi: Abi = [
  {
    type: "function",
    name: "question",
    stateMutability: "view",
    inputs: [],
    outputs: [{ name: "", type: "string" }],
  },
  {
    type: "function",
    name: "getOptions",
    stateMutability: "view",
    inputs: [],
    outputs: [{ name: "", type: "string[]" }],
  },
  {
    type: "function",
    name: "vote",
    stateMutability: "nonpayable",
    inputs: [{ name: "optionIndex", type: "uint256" }],
    outputs: [],
  },
  {
    type: "function",
    name: "votes",
    stateMutability: "view",
    inputs: [{ name: "", type: "uint256" }],
    outputs: [{ name: "", type: "uint256" }],
  },
  {
    type: "function",
    name: "hasVoted",
    stateMutability: "view",
    inputs: [{ name: "", type: "address" }],
    outputs: [{ name: "", type: "bool" }],
  },
];
