import { AbiItem } from "web3-utils";

export const BeyondExchangeAbi: AbiItem | AbiItem[] = [
  {
    inputs: [
      {
        internalType: "contract IBeyond",
        name: "_beyondTokenAddress",
        type: "address",
      },
      {
        internalType: "contract IBeyondExProx",
        name: "_proxContractAddress",
        type: "address",
      },
      {
        internalType: "contract ILoanProx",
        name: "_LoanContract",
        type: "address",
      },
      { internalType: "address payable", name: "_wallet", type: "address" },
    ],
    payable: false,
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    constant: true,
    inputs: [],
    name: "LoanContract",
    outputs: [
      { internalType: "contract ILoanProx", name: "", type: "address" },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "beyondToken",
    outputs: [{ internalType: "contract IBeyond", name: "", type: "address" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "beyondTokenAddress",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [{ internalType: "uint256", name: "_value", type: "uint256" }],
    name: "buybUSD",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      { internalType: "uint256", name: "_time", type: "uint256" },
      { internalType: "address", name: "_beneficiary", type: "address" },
    ],
    name: "checkUserReward",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [],
    name: "claimUserReward",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      { internalType: "string", name: "_synth1", type: "string" },
      { internalType: "string", name: "_synth2", type: "string" },
      { internalType: "uint256", name: "_value", type: "uint256" },
    ],
    name: "convertSynths",
    outputs: [{ internalType: "bool", name: "", type: "bool" }],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      { internalType: "string", name: "_synth1", type: "string" },
      { internalType: "uint256", name: "_value", type: "uint256" },
    ],
    name: "convertSynthsToUSD",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [
      { internalType: "address", name: "_beneficiary", type: "address" },
    ],
    name: "getBYNDetails",
    outputs: [
      { internalType: "uint256", name: "unstackedBYN", type: "uint256" },
      { internalType: "uint256", name: "stackedBYN", type: "uint256" },
      { internalType: "uint256", name: "totalBYN", type: "uint256" },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "getEthLocked",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "getExchangeProxDetails",
    outputs: [
      { internalType: "uint256", name: "_currentTime", type: "uint256" },
      { internalType: "uint256", name: "_collatteralRatio", type: "uint256" },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [],
    name: "getLoan",
    outputs: [],
    payable: true,
    stateMutability: "payable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "getLoanContractDetails",
    outputs: [
      { internalType: "uint256", name: "_loanFeeRatio", type: "uint256" },
      {
        internalType: "uint256",
        name: "_loanCollatteralRatio",
        type: "uint256",
      },
      { internalType: "uint256", name: "_totalETHb", type: "uint256" },
      { internalType: "uint256", name: "_totalUSDb", type: "uint256" },
      { internalType: "uint256", name: "_openLoans", type: "uint256" },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [],
    name: "getLoanUSDb",
    outputs: [],
    payable: true,
    stateMutability: "payable",
    type: "function",
  },
  {
    constant: true,
    inputs: [{ internalType: "address", name: "_address", type: "address" }],
    name: "getloanDetails",
    outputs: [
      { internalType: "uint256", name: "_collatteralETHb", type: "uint256" },
      { internalType: "uint256", name: "_loanValueETHb", type: "uint256" },
      {
        internalType: "uint256",
        name: "_totalValueAfterLoanFeeETHb",
        type: "uint256",
      },
      { internalType: "uint256", name: "_loansOfETHb", type: "uint256" },
      { internalType: "uint256", name: "_collatteralUSDb", type: "uint256" },
      { internalType: "uint256", name: "_loanValueUSDb", type: "uint256" },
      {
        internalType: "uint256",
        name: "_totalValueAfterLoanFeeUSDb",
        type: "uint256",
      },
      { internalType: "uint256", name: "_loansOfUSDb", type: "uint256" },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      { internalType: "string", name: "_synth", type: "string" },
      { internalType: "uint256", name: "_value", type: "uint256" },
    ],
    name: "mintSynth",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "owner",
    outputs: [{ internalType: "address", name: "", type: "address" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: true,
    inputs: [],
    name: "proxContract",
    outputs: [
      { internalType: "contract IBeyondExProx", name: "", type: "address" },
    ],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
  {
    constant: false,
    inputs: [{ internalType: "uint256", name: "_value", type: "uint256" }],
    name: "releaseCollatteralRatio",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [],
    name: "returnLoan",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [],
    name: "returnLoanUSDb",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      {
        internalType: "contract IBeyondExProx",
        name: "_address",
        type: "address",
      },
    ],
    name: "setBeyondExProx",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [{ internalType: "address", name: "_address", type: "address" }],
    name: "setBeyondExchangeAddressInLoan",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [{ internalType: "address", name: "_address", type: "address" }],
    name: "setBeyondExchangeAddressInProx",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      { internalType: "contract ILoanProx", name: "_address", type: "address" },
    ],
    name: "setLoanProx",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [
      { internalType: "string", name: "_synth", type: "string" },
      {
        internalType: "contract ISynth",
        name: "synthAddress",
        type: "address",
      },
    ],
    name: "setSynthAddressInProx",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [],
    name: "settleCollatteralRatio",
    outputs: [{ internalType: "uint256", name: "", type: "uint256" }],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [],
    name: "startExchange",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: false,
    inputs: [{ internalType: "address", name: "newOwner", type: "address" }],
    name: "transferOwnership",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
];
