/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { MockLensHubV2, MockLensHubV2Interface } from "../MockLensHubV2";

const _abi = [
  {
    inputs: [],
    name: "CannotInitImplementation",
    type: "error",
  },
  {
    inputs: [],
    name: "Initialized",
    type: "error",
  },
  {
    inputs: [],
    name: "NotOwnerOrApproved",
    type: "error",
  },
  {
    inputs: [],
    name: "SignatureExpired",
    type: "error",
  },
  {
    inputs: [],
    name: "SignatureInvalid",
    type: "error",
  },
  {
    inputs: [],
    name: "ZeroSpender",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        components: [
          {
            internalType: "uint8",
            name: "v",
            type: "uint8",
          },
          {
            internalType: "bytes32",
            name: "r",
            type: "bytes32",
          },
          {
            internalType: "bytes32",
            name: "s",
            type: "bytes32",
          },
          {
            internalType: "uint256",
            name: "deadline",
            type: "uint256",
          },
        ],
        internalType: "struct DataTypes.EIP712Signature",
        name: "sig",
        type: "tuple",
      },
    ],
    name: "burnWithSig",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "exists",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getAdditionalValue",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getApproved",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getDomainSeparator",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getState",
    outputs: [
      {
        internalType: "enum DataTypes.ProtocolState",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "newValue",
        type: "uint256",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "mintTimestampOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "ownerOf",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        components: [
          {
            internalType: "uint8",
            name: "v",
            type: "uint8",
          },
          {
            internalType: "bytes32",
            name: "r",
            type: "bytes32",
          },
          {
            internalType: "bytes32",
            name: "s",
            type: "bytes32",
          },
          {
            internalType: "uint256",
            name: "deadline",
            type: "uint256",
          },
        ],
        internalType: "struct DataTypes.EIP712Signature",
        name: "sig",
        type: "tuple",
      },
    ],
    name: "permit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
      {
        components: [
          {
            internalType: "uint8",
            name: "v",
            type: "uint8",
          },
          {
            internalType: "bytes32",
            name: "r",
            type: "bytes32",
          },
          {
            internalType: "bytes32",
            name: "s",
            type: "bytes32",
          },
          {
            internalType: "uint256",
            name: "deadline",
            type: "uint256",
          },
        ],
        internalType: "struct DataTypes.EIP712Signature",
        name: "sig",
        type: "tuple",
      },
    ],
    name: "permitForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "newValue",
        type: "uint256",
      },
    ],
    name: "setAdditionalValue",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "sigNonces",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "tokenByIndex",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "tokenDataOf",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "owner",
            type: "address",
          },
          {
            internalType: "uint96",
            name: "mintTimestamp",
            type: "uint96",
          },
        ],
        internalType: "struct IERC721Time.TokenData",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "tokenOfOwnerByIndex",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "tokenURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60a06040526000600b5534801561001557600080fd5b50306080526080516120d26100356000396000610f2901526120d26000f3fe608060405234801561001057600080fd5b50600436106101cf5760003560e01c80636352211e11610104578063b88d4fde116100a2578063e985e9c511610071578063e985e9c5146103f6578063ed24911d14610432578063f990ccd71461043a578063fe4b84df1461045a57600080fd5b8063b88d4fde1461037d578063c0da9bcd14610390578063c87b56dd146103d0578063dd69cdb1146103e357600080fd5b806385e922e7116100de57806385e922e71461034757806389028a131461034f57806395d89b4114610362578063a22cb4651461036a57600080fd5b80636352211e1461030e57806370a08231146103215780637ef67f991461033457600080fd5b80632f745c5911610171578063493830a41161014b578063493830a4146102c25780634f558e79146102d55780634f6ccce7146102e857806350ddf35c146102fb57600080fd5b80632f745c591461028957806342842e0e1461029c57806342966c68146102af57600080fd5b8063095ea7b3116101ad578063095ea7b31461023c57806318160ddd146102515780631865c57d1461026357806323b872dd1461027657600080fd5b806301ffc9a7146101d457806306fdde03146101fc578063081812fc14610211575b600080fd5b6101e76101e2366004611a54565b61046d565b60405190151581526020015b60405180910390f35b610204610498565b6040516101f39190611ac9565b61022461021f366004611adc565b61052a565b6040516001600160a01b0390911681526020016101f3565b61024f61024a366004611b11565b6105c4565b005b6008545b6040519081526020016101f3565b600c5460ff166040516101f39190611b3b565b61024f610284366004611b63565b6106da565b610255610297366004611b11565b61070b565b61024f6102aa366004611b63565b6107a1565b61024f6102bd366004611adc565b6107bc565b61024f6102d0366004611adc565b601855565b6101e76102e3366004611adc565b6107ef565b6102556102f6366004611adc565b61080e565b610255610309366004611adc565b6108a1565b61022461031c366004611adc565b610937565b61025561032f366004611b9f565b6109ae565b61024f610342366004611bd2565b610a35565b601854610255565b61024f61035d366004611c1f565b610b42565b610204610c21565b61024f610378366004611c74565b610c30565b61024f61038b366004611cee565b610c98565b6103a361039e366004611adc565b610cca565b6040805182516001600160a01b031681526020928301516001600160601b031692810192909252016101f3565b6102046103de366004611adc565b610d98565b61024f6103f1366004611dae565b610e80565b6101e7610404366004611dd2565b6001600160a01b03918216600090815260056020908152604080832093909416825291909152205460ff1690565b610255610f16565b610255610448366004611b9f565b600a6020526000908152604090205481565b61024f610468366004611adc565b610f25565b60006001600160e01b0319821663780e9d6360e01b1480610492575061049282610f9b565b92915050565b6060600080546104a790611dfc565b80601f01602080910402602001604051908101604052809291908181526020018280546104d390611dfc565b80156105205780601f106104f557610100808354040283529160200191610520565b820191906000526020600020905b81548152906001019060200180831161050357829003601f168201915b5050505050905090565b6000818152600260205260408120546001600160a01b03166105a85760405162461bcd60e51b815260206004820152602c60248201527f4552433732313a20617070726f76656420717565727920666f72206e6f6e657860448201526b34b9ba32b73a103a37b5b2b760a11b60648201526084015b60405180910390fd5b506000908152600460205260409020546001600160a01b031690565b60006105cf82610937565b9050806001600160a01b0316836001600160a01b0316141561063d5760405162461bcd60e51b815260206004820152602160248201527f4552433732313a20617070726f76616c20746f2063757272656e74206f776e656044820152603960f91b606482015260840161059f565b336001600160a01b038216148061065957506106598133610404565b6106cb5760405162461bcd60e51b815260206004820152603860248201527f4552433732313a20617070726f76652063616c6c6572206973206e6f74206f7760448201527f6e6572206e6f7220617070726f76656420666f7220616c6c0000000000000000606482015260840161059f565b6106d58383610feb565b505050565b6106e43382611059565b6107005760405162461bcd60e51b815260040161059f90611e31565b6106d5838383611150565b6000610716836109ae565b82106107785760405162461bcd60e51b815260206004820152602b60248201527f455243373231456e756d657261626c653a206f776e657220696e646578206f7560448201526a74206f6620626f756e647360a81b606482015260840161059f565b506001600160a01b03919091166000908152600660209081526040808320938352929052205490565b6106d583838360405180602001604052806000815250610c98565b6107c63382611059565b6107e357604051636d8a29e760e11b815260040160405180910390fd5b6107ec816112fb565b50565b6000818152600260205260408120546001600160a01b03161515610492565b600061081960085490565b821061087c5760405162461bcd60e51b815260206004820152602c60248201527f455243373231456e756d657261626c653a20676c6f62616c20696e646578206f60448201526b7574206f6620626f756e647360a01b606482015260840161059f565b6008828154811061088f5761088f611e82565b90600052602060002001549050919050565b600081815260026020526040812054600160a01b90046001600160601b0316806109285760405162461bcd60e51b815260206004820152603260248201527f4552433732313a206d696e742074696d657374616d7020717565727920666f72604482015271103737b732bc34b9ba32b73a103a37b5b2b760711b606482015260840161059f565b6001600160601b031692915050565b6000818152600260205260408120546001600160a01b0316806104925760405162461bcd60e51b815260206004820152602960248201527f4552433732313a206f776e657220717565727920666f72206e6f6e657869737460448201526832b73a103a37b5b2b760b91b606482015260840161059f565b60006001600160a01b038216610a195760405162461bcd60e51b815260206004820152602a60248201527f4552433732313a2062616c616e636520717565727920666f7220746865207a65604482015269726f206164647265737360b01b606482015260840161059f565b506001600160a01b031660009081526003602052604090205490565b6001600160a01b038316610a5c576040516307eb16dd60e21b815260040160405180910390fd5b6000610a6783610937565b6001600160a01b0381166000908152600a602052604081208054929350610b3292610b1d927f49ecf333e5b8c95c40fdafc95c1ad136e8914a8fb55e9dc8bb01eaa83a2df9ad9289928992909190610abe83611eae565b919050558760600135604051602001610b029594939291909485526001600160a01b0393909316602085015260408401919091526060830152608082015260a00190565b60405160208183030381529060405280519060200120611397565b82610b2d36869003860186611ec9565b6113e1565b610b3c8484610feb565b50505050565b6001600160a01b038316610b69576040516307eb16dd60e21b815260040160405180910390fd5b6001600160a01b0384166000908152600a602052604081208054610c1692610c06927f47ab88482c90e4bb94b82a947ae78fa91fb25de1469ab491f4c15b9a0a2677ee9289928992899291610bbd83611eae565b909155506040805160208101969096526001600160a01b039485169086015291909216606080850191909152911515608084015260a083015284013560c082015260e001610b02565b85610b2d36859003850185611ec9565b610b3c8484846114c5565b6060600180546104a790611dfc565b6001600160a01b038216331415610c895760405162461bcd60e51b815260206004820152601960248201527f4552433732313a20617070726f766520746f2063616c6c657200000000000000604482015260640161059f565b610c943383836114c5565b5050565b610ca23383611059565b610cbe5760405162461bcd60e51b815260040161059f90611e31565b610b3c84848484611532565b60408051808201909152600080825260208201526000828152600260205260409020546001600160a01b0316610d595760405162461bcd60e51b815260206004820152602e60248201527f4552433732313a20746f6b656e206461746120717565727920666f72206e6f6e60448201526d32bc34b9ba32b73a103a37b5b2b760911b606482015260840161059f565b506000908152600260209081526040918290208251808401909352546001600160a01b0381168352600160a01b90046001600160601b03169082015290565b6000818152600260205260409020546060906001600160a01b0316610e175760405162461bcd60e51b815260206004820152602f60248201527f4552433732314d657461646174613a2055524920717565727920666f72206e6f60448201526e3732bc34b9ba32b73a103a37b5b2b760891b606482015260840161059f565b6000610e2e60408051602081019091526000815290565b90506000815111610e4e5760405180602001604052806000815250610e79565b80610e5884611565565b604051602001610e69929190611f3e565b6040516020818303038152906040525b9392505050565b6000610e8b83610937565b6001600160a01b0381166000908152600a602052604081208054929350610f0d92610b1d927f108ccda6d7331b00561a3eea66a2ae331622356585681c62731e4a01aae2261a92889291610ede83611eae565b90915550604080516020810194909452830191909152606082810191909152850135608082015260a001610b02565b6106d5836112fb565b6000610f20611663565b905090565b60027f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316301415610f71576040516325c7410560e21b815260040160405180910390fd5b600b548111610f93576040516302ed543d60e51b815260040160405180910390fd5b600b55601855565b60006001600160e01b031982166380ac58cd60e01b1480610fcc57506001600160e01b03198216635b5e139f60e01b145b8061049257506301ffc9a760e01b6001600160e01b0319831614610492565b600081815260046020526040902080546001600160a01b0319166001600160a01b038416908117909155819061102082610937565b6001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b6000818152600260205260408120546001600160a01b03166110d25760405162461bcd60e51b815260206004820152602c60248201527f4552433732313a206f70657261746f7220717565727920666f72206e6f6e657860448201526b34b9ba32b73a103a37b5b2b760a11b606482015260840161059f565b60006110dd83610937565b9050806001600160a01b0316846001600160a01b031614806111185750836001600160a01b031661110d8461052a565b6001600160a01b0316145b8061114857506001600160a01b0380821660009081526005602090815260408083209388168352929052205460ff165b949350505050565b826001600160a01b031661116382610937565b6001600160a01b0316146111cb5760405162461bcd60e51b815260206004820152602960248201527f4552433732313a207472616e73666572206f6620746f6b656e2074686174206960448201526839903737ba1037bbb760b91b606482015260840161059f565b6001600160a01b03821661122d5760405162461bcd60e51b8152602060048201526024808201527f4552433732313a207472616e7366657220746f20746865207a65726f206164646044820152637265737360e01b606482015260840161059f565b6112388383836116f8565b611243600082610feb565b6001600160a01b038316600090815260036020526040812080546001929061126c908490611f6d565b90915550506001600160a01b038216600090815260036020526040812080546001929061129a908490611f84565b909155505060008181526002602052604080822080546001600160a01b0319166001600160a01b0386811691821790925591518493918716917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a4505050565b600061130682610937565b9050611314816000846116f8565b61131f600083610feb565b6001600160a01b0381166000908152600360205260408120805460019290611348908490611f6d565b9091555050600082815260026020526040808220829055518391906001600160a01b038416907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908390a45050565b6000806113a2611663565b60405161190160f01b602082015260228101919091526042810184905260620160408051601f1981840301815291905280516020909101209392505050565b428160600151101561140657604051630819bdcd60e01b815260040160405180910390fd5b600060018483600001518460200151856040015160405160008152602001604052604051611450949392919093845260ff9290921660208401526040830152606082015260800190565b6020604051602081039080840390855afa158015611472573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b03811615806114a75750826001600160a01b0316816001600160a01b031614155b15610b3c576040516337e8456b60e01b815260040160405180910390fd5b6001600160a01b03838116600081815260056020908152604080832094871680845294825291829020805460ff191686151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050565b61153d848484611150565b611549848484846117b0565b610b3c5760405162461bcd60e51b815260040161059f90611f9c565b6060816115895750506040805180820190915260018152600360fc1b602082015290565b8160005b81156115b3578061159d81611eae565b91506115ac9050600a83612004565b915061158d565b60008167ffffffffffffffff8111156115ce576115ce611ca7565b6040519080825280601f01601f1916602001820160405280156115f8576020820181803683370190505b5090505b84156111485761160d600183611f6d565b915061161a600a86612018565b611625906030611f84565b60f81b81838151811061163a5761163a611e82565b60200101906001600160f81b031916908160001a90535061165c600a86612004565b94506115fc565b60007f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f61168e610498565b80516020918201206040805192830193909352918101919091527fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc660608201524660808201523060a082015260c00160405160208183030381529060405280519060200120905090565b6001600160a01b0383166117535761174e81600880546000838152600960205260408120829055600182018355919091527ff3f7a9fe364faab93b216da50a3214154f22a0a2b415b23a84c8169e8b636ee30155565b611776565b816001600160a01b0316836001600160a01b0316146117765761177683826118ae565b6001600160a01b03821661178d576106d58161194b565b826001600160a01b0316826001600160a01b0316146106d5576106d582826119fa565b60006001600160a01b0384163b156118a357604051630a85bd0160e11b81526001600160a01b0385169063150b7a02906117f490339089908890889060040161202c565b6020604051808303816000875af192505050801561182f575060408051601f3d908101601f1916820190925261182c91810190612069565b60015b611889573d80801561185d576040519150601f19603f3d011682016040523d82523d6000602084013e611862565b606091505b5080516118815760405162461bcd60e51b815260040161059f90611f9c565b805181602001fd5b6001600160e01b031916630a85bd0160e11b149050611148565b506001949350505050565b600060016118bb846109ae565b6118c59190611f6d565b600083815260076020526040902054909150808214611918576001600160a01b03841660009081526006602090815260408083208584528252808320548484528184208190558352600790915290208190555b5060009182526007602090815260408084208490556001600160a01b039094168352600681528383209183525290812055565b60085460009061195d90600190611f6d565b6000838152600960205260408120546008805493945090928490811061198557611985611e82565b9060005260206000200154905080600883815481106119a6576119a6611e82565b60009182526020808320909101929092558281526009909152604080822084905585825281205560088054806119de576119de612086565b6001900381819060005260206000200160009055905550505050565b6000611a05836109ae565b6001600160a01b039093166000908152600660209081526040808320868452825280832085905593825260079052919091209190915550565b6001600160e01b0319811681146107ec57600080fd5b600060208284031215611a6657600080fd5b8135610e7981611a3e565b60005b83811015611a8c578181015183820152602001611a74565b83811115610b3c5750506000910152565b60008151808452611ab5816020860160208601611a71565b601f01601f19169290920160200192915050565b602081526000610e796020830184611a9d565b600060208284031215611aee57600080fd5b5035919050565b80356001600160a01b0381168114611b0c57600080fd5b919050565b60008060408385031215611b2457600080fd5b611b2d83611af5565b946020939093013593505050565b6020810160038310611b5d57634e487b7160e01b600052602160045260246000fd5b91905290565b600080600060608486031215611b7857600080fd5b611b8184611af5565b9250611b8f60208501611af5565b9150604084013590509250925092565b600060208284031215611bb157600080fd5b610e7982611af5565b600060808284031215611bcc57600080fd5b50919050565b600080600060c08486031215611be757600080fd5b611bf084611af5565b925060208401359150611c068560408601611bba565b90509250925092565b80358015158114611b0c57600080fd5b60008060008060e08587031215611c3557600080fd5b611c3e85611af5565b9350611c4c60208601611af5565b9250611c5a60408601611c0f565b9150611c698660608701611bba565b905092959194509250565b60008060408385031215611c8757600080fd5b611c9083611af5565b9150611c9e60208401611c0f565b90509250929050565b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f1916810167ffffffffffffffff81118282101715611ce657611ce6611ca7565b604052919050565b60008060008060808587031215611d0457600080fd5b611d0d85611af5565b93506020611d1c818701611af5565b935060408601359250606086013567ffffffffffffffff80821115611d4057600080fd5b818801915088601f830112611d5457600080fd5b813581811115611d6657611d66611ca7565b611d78601f8201601f19168501611cbd565b91508082528984828501011115611d8e57600080fd5b808484018584013760008482840101525080935050505092959194509250565b60008060a08385031215611dc157600080fd5b82359150611c9e8460208501611bba565b60008060408385031215611de557600080fd5b611dee83611af5565b9150611c9e60208401611af5565b600181811c90821680611e1057607f821691505b60208210811415611bcc57634e487b7160e01b600052602260045260246000fd5b60208082526031908201527f4552433732313a207472616e736665722063616c6c6572206973206e6f74206f6040820152701ddb995c881b9bdc88185c1c1c9bdd9959607a1b606082015260800190565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b6000600019821415611ec257611ec2611e98565b5060010190565b600060808284031215611edb57600080fd5b6040516080810181811067ffffffffffffffff82111715611efe57611efe611ca7565b604052823560ff81168114611f1257600080fd5b808252506020830135602082015260408301356040820152606083013560608201528091505092915050565b60008351611f50818460208801611a71565b835190830190611f64818360208801611a71565b01949350505050565b600082821015611f7f57611f7f611e98565b500390565b60008219821115611f9757611f97611e98565b500190565b60208082526032908201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560408201527131b2b4bb32b91034b6b83632b6b2b73a32b960711b606082015260800190565b634e487b7160e01b600052601260045260246000fd5b60008261201357612013611fee565b500490565b60008261202757612027611fee565b500690565b6001600160a01b038581168252841660208201526040810183905260806060820181905260009061205f90830184611a9d565b9695505050505050565b60006020828403121561207b57600080fd5b8151610e7981611a3e565b634e487b7160e01b600052603160045260246000fdfea2646970667358221220ed2cb1080c51da0862fdc43f205714d05fb1984689828e7dea043bb3b183a50564736f6c634300080a0033";

type MockLensHubV2ConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MockLensHubV2ConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MockLensHubV2__factory extends ContractFactory {
  constructor(...args: MockLensHubV2ConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<MockLensHubV2> {
    return super.deploy(overrides || {}) as Promise<MockLensHubV2>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): MockLensHubV2 {
    return super.attach(address) as MockLensHubV2;
  }
  connect(signer: Signer): MockLensHubV2__factory {
    return super.connect(signer) as MockLensHubV2__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MockLensHubV2Interface {
    return new utils.Interface(_abi) as MockLensHubV2Interface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MockLensHubV2 {
    return new Contract(address, _abi, signerOrProvider) as MockLensHubV2;
  }
}
