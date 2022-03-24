/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { CollectNFT, CollectNFTInterface } from "../CollectNFT";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "hub",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "Initialized",
    type: "error",
  },
  {
    inputs: [],
    name: "NotHub",
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
    name: "TokenDoesNotExist",
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
    inputs: [],
    name: "HUB",
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
    name: "getSourcePublicationPointer",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
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
        name: "profileId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "pubId",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "string",
        name: "symbol",
        type: "string",
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
        internalType: "address",
        name: "to",
        type: "address",
      },
    ],
    name: "mint",
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
  "0x60a060405234801561001057600080fd5b506040516200250c3803806200250c8339810160408190526100319161004f565b6001600160a01b0316608052600e805460ff1916600117905561007f565b60006020828403121561006157600080fd5b81516001600160a01b038116811461007857600080fd5b9392505050565b60805161245c620000b06000396000818161039501528181610a4901528181610ec9015261183d015261245c6000f3fe608060405234801561001057600080fd5b50600436106101cf5760003560e01c80636352211e11610104578063a4c52b86116100a2578063dd69cdb111610071578063dd69cdb11461041d578063e985e9c514610430578063ed24911d1461046c578063f990ccd71461047457600080fd5b8063a4c52b8614610390578063b88d4fde146103b7578063c0da9bcd146103ca578063c87b56dd1461040a57600080fd5b80637ef67f99116100de5780637ef67f991461034f57806389028a131461036257806395d89b4114610375578063a22cb4651461037d57600080fd5b80636352211e146103165780636a6278421461032957806370a082311461033c57600080fd5b80633a755ed11161017157806342966c681161014b57806342966c68146102ca5780634f558e79146102dd5780634f6ccce7146102f057806350ddf35c1461030357600080fd5b80633a755ed1146102895780633fa78c0a146102a457806342842e0e146102b757600080fd5b8063095ea7b3116101ad578063095ea7b31461023c57806318160ddd1461025157806323b872dd146102635780632f745c591461027657600080fd5b806301ffc9a7146101d457806306fdde03146101fc578063081812fc14610211575b600080fd5b6101e76101e2366004611cb3565b610494565b60405190151581526020015b60405180910390f35b6102046104bf565b6040516101f39190611d2f565b61022461021f366004611d42565b610551565b6040516001600160a01b0390911681526020016101f3565b61024f61024a366004611d77565b6105de565b005b6008545b6040519081526020016101f3565b61024f610271366004611da1565b6106f4565b610255610284366004611d77565b610725565b600b54600c54604080519283526020830191909152016101f3565b61024f6102b2366004611e26565b6107bb565b61024f6102c5366004611da1565b610845565b61024f6102d8366004611d42565b610860565b6101e76102eb366004611d42565b610893565b6102556102fe366004611d42565b61089e565b610255610311366004611d42565b610931565b610224610324366004611d42565b6109c7565b61024f610337366004611ea9565b610a3e565b61025561034a366004611ea9565b610aad565b61024f61035d366004611edc565b610b34565b61024f610370366004611f29565b610c41565b610204610d20565b61024f61038b366004611f7e565b610d2f565b6102247f000000000000000000000000000000000000000000000000000000000000000081565b61024f6103c5366004612020565b610d93565b6103dd6103d8366004611d42565b610dc5565b6040805182516001600160a01b031681526020928301516001600160601b031692810192909252016101f3565b610204610418366004611d42565b610e84565b61024f61042b3660046120cb565b610f4a565b6101e761043e3660046120ef565b6001600160a01b03918216600090815260056020908152604080832093909416825291909152205460ff1690565b610255610fe0565b610255610482366004611ea9565b600a6020526000908152604090205481565b60006001600160e01b0319821663780e9d6360e01b14806104b957506104b982610fef565b92915050565b6060600080546104ce90612119565b80601f01602080910402602001604051908101604052809291908181526020018280546104fa90612119565b80156105475780601f1061051c57610100808354040283529160200191610547565b820191906000526020600020905b81548152906001019060200180831161052a57829003601f168201915b5050505050905090565b600061055c8261103f565b6105c25760405162461bcd60e51b815260206004820152602c60248201527f4552433732313a20617070726f76656420717565727920666f72206e6f6e657860448201526b34b9ba32b73a103a37b5b2b760a11b60648201526084015b60405180910390fd5b506000908152600460205260409020546001600160a01b031690565b60006105e9826109c7565b9050806001600160a01b0316836001600160a01b031614156106575760405162461bcd60e51b815260206004820152602160248201527f4552433732313a20617070726f76616c20746f2063757272656e74206f776e656044820152603960f91b60648201526084016105b9565b336001600160a01b03821614806106735750610673813361043e565b6106e55760405162461bcd60e51b815260206004820152603860248201527f4552433732313a20617070726f76652063616c6c6572206973206e6f74206f7760448201527f6e6572206e6f7220617070726f76656420666f7220616c6c000000000000000060648201526084016105b9565b6106ef838361105c565b505050565b6106fe33826110ca565b61071a5760405162461bcd60e51b81526004016105b99061214e565b6106ef8383836111b4565b600061073083610aad565b82106107925760405162461bcd60e51b815260206004820152602b60248201527f455243373231456e756d657261626c653a206f776e657220696e646578206f7560448201526a74206f6620626f756e647360a81b60648201526084016105b9565b506001600160a01b03919091166000908152600660209081526040808320938352929052205490565b600e5460ff16156107df576040516302ed543d60e51b815260040160405180910390fd5b600e805460ff19166001179055600b869055600c8590556108028484848461135f565b84867f898a2dec95856255977a0fb48cebc30051d50c0d8d33f93dea1e3ddb2e3424424260405161083591815260200190565b60405180910390a3505050505050565b6106ef83838360405180602001604052806000815250610d93565b61086a33826110ca565b61088757604051636d8a29e760e11b815260040160405180910390fd5b610890816113b0565b50565b60006104b98261103f565b60006108a960085490565b821061090c5760405162461bcd60e51b815260206004820152602c60248201527f455243373231456e756d657261626c653a20676c6f62616c20696e646578206f60448201526b7574206f6620626f756e647360a01b60648201526084016105b9565b6008828154811061091f5761091f61219f565b90600052602060002001549050919050565b600081815260026020526040812054600160a01b90046001600160601b0316806109b85760405162461bcd60e51b815260206004820152603260248201527f4552433732313a206d696e742074696d657374616d7020717565727920666f72604482015271103737b732bc34b9ba32b73a103a37b5b2b760711b60648201526084016105b9565b6001600160601b031692915050565b6000818152600260205260408120546001600160a01b0316806104b95760405162461bcd60e51b815260206004820152602960248201527f4552433732313a206f776e657220717565727920666f72206e6f6e657869737460448201526832b73a103a37b5b2b760b91b60648201526084016105b9565b336001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614610a87576040516313bd2e8360e31b815260040160405180910390fd5b6000600d60008154610a98906121cb565b91829055509050610aa9828261144c565b5050565b60006001600160a01b038216610b185760405162461bcd60e51b815260206004820152602a60248201527f4552433732313a2062616c616e636520717565727920666f7220746865207a65604482015269726f206164647265737360b01b60648201526084016105b9565b506001600160a01b031660009081526003602052604090205490565b6001600160a01b038316610b5b576040516307eb16dd60e21b815260040160405180910390fd5b6000610b66836109c7565b6001600160a01b0381166000908152600a602052604081208054929350610c3192610c1c927f49ecf333e5b8c95c40fdafc95c1ad136e8914a8fb55e9dc8bb01eaa83a2df9ad9289928992909190610bbd836121cb565b919050558760600135604051602001610c019594939291909485526001600160a01b0393909316602085015260408401919091526060830152608082015260a00190565b6040516020818303038152906040528051906020012061158e565b82610c2c368690038601866121e6565b6115d8565b610c3b848461105c565b50505050565b6001600160a01b038316610c68576040516307eb16dd60e21b815260040160405180910390fd5b6001600160a01b0384166000908152600a602052604081208054610d1592610d05927f47ab88482c90e4bb94b82a947ae78fa91fb25de1469ab491f4c15b9a0a2677ee9289928992899291610cbc836121cb565b909155506040805160208101969096526001600160a01b039485169086015291909216606080850191909152911515608084015260a083015284013560c082015260e001610c01565b85610c2c368590038501856121e6565b610c3b8484846116bc565b6060600180546104ce90612119565b6001600160a01b038216331415610d885760405162461bcd60e51b815260206004820152601960248201527f4552433732313a20617070726f766520746f2063616c6c65720000000000000060448201526064016105b9565b610aa93383836116bc565b610d9d33836110ca565b610db95760405162461bcd60e51b81526004016105b99061214e565b610c3b84848484611729565b6040805180820190915260008082526020820152610de28261103f565b610e455760405162461bcd60e51b815260206004820152602e60248201527f4552433732313a20746f6b656e206461746120717565727920666f72206e6f6e60448201526d32bc34b9ba32b73a103a37b5b2b760911b60648201526084016105b9565b506000908152600260209081526040918290208251808401909352546001600160a01b0381168352600160a01b90046001600160601b03169082015290565b6060610e8f8261103f565b610eac5760405163677510db60e11b815260040160405180910390fd5b600b54600c54604051635ad18a4b60e11b81526001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169263b5a3149692610f0592600401918252602082015260400190565b600060405180830381865afa158015610f22573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526104b9919081019061225b565b6000610f55836109c7565b6001600160a01b0381166000908152600a602052604081208054929350610fd792610c1c927f108ccda6d7331b00561a3eea66a2ae331622356585681c62731e4a01aae2261a92889291610fa8836121cb565b90915550604080516020810194909452830191909152606082810191909152850135608082015260a001610c01565b6106ef836113b0565b6000610fea61175c565b905090565b60006001600160e01b031982166380ac58cd60e01b148061102057506001600160e01b03198216635b5e139f60e01b145b806104b957506301ffc9a760e01b6001600160e01b03198316146104b9565b6000908152600260205260409020546001600160a01b0316151590565b600081815260046020526040902080546001600160a01b0319166001600160a01b0384169081179091558190611091826109c7565b6001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b60006110d58261103f565b6111365760405162461bcd60e51b815260206004820152602c60248201527f4552433732313a206f70657261746f7220717565727920666f72206e6f6e657860448201526b34b9ba32b73a103a37b5b2b760a11b60648201526084016105b9565b6000611141836109c7565b9050806001600160a01b0316846001600160a01b0316148061117c5750836001600160a01b031661117184610551565b6001600160a01b0316145b806111ac57506001600160a01b0380821660009081526005602090815260408083209388168352929052205460ff165b949350505050565b826001600160a01b03166111c7826109c7565b6001600160a01b03161461122f5760405162461bcd60e51b815260206004820152602960248201527f4552433732313a207472616e73666572206f6620746f6b656e2074686174206960448201526839903737ba1037bbb760b91b60648201526084016105b9565b6001600160a01b0382166112915760405162461bcd60e51b8152602060048201526024808201527f4552433732313a207472616e7366657220746f20746865207a65726f206164646044820152637265737360e01b60648201526084016105b9565b61129c8383836117f1565b6112a760008261105c565b6001600160a01b03831660009081526003602052604081208054600192906112d09084906122d2565b90915550506001600160a01b03821660009081526003602052604081208054600192906112fe9084906122e9565b909155505060008181526002602052604080822080546001600160a01b0319166001600160a01b0386811691821790925591518493918716917fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef91a4505050565b61136b8484848461189e565b7f414cd0b34676984f09a5f76ce9718d4062e50283abe0e7e274a9a5b4e0c99c3084848484426040516113a295949392919061232a565b60405180910390a150505050565b60006113bb826109c7565b90506113c9816000846117f1565b6113d460008361105c565b6001600160a01b03811660009081526003602052604081208054600192906113fd9084906122d2565b9091555050600082815260026020526040808220829055518391906001600160a01b038416907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908390a45050565b6001600160a01b0382166114a25760405162461bcd60e51b815260206004820181905260248201527f4552433732313a206d696e7420746f20746865207a65726f206164647265737360448201526064016105b9565b6114ab8161103f565b156114f85760405162461bcd60e51b815260206004820152601c60248201527f4552433732313a20746f6b656e20616c7265616479206d696e7465640000000060448201526064016105b9565b611504600083836117f1565b6001600160a01b038216600090815260036020526040812080546001929061152d9084906122e9565b90915550506000818152600260205260408082206001600160a01b038516600160a01b426001600160601b031602811790915590518392907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908290a45050565b60008061159961175c565b60405161190160f01b602082015260228101919091526042810184905260620160408051601f1981840301815291905280516020909101209392505050565b42816060015110156115fd57604051630819bdcd60e01b815260040160405180910390fd5b600060018483600001518460200151856040015160405160008152602001604052604051611647949392919093845260ff9290921660208401526040830152606082015260800190565b6020604051602081039080840390855afa158015611669573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b038116158061169e5750826001600160a01b0316816001600160a01b031614155b15610c3b576040516337e8456b60e01b815260040160405180910390fd5b6001600160a01b03838116600081815260056020908152604080832094871680845294825291829020805460ff191686151590811790915591519182527f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c31910160405180910390a3505050565b6117348484846111b4565b611740848484846118be565b610c3b5760405162461bcd60e51b81526004016105b990612364565b60007f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f6117876104bf565b80516020918201206040805192830193909352918101919091527fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc660608201524660808201523060a082015260c00160405160208183030381529060405280519060200120905090565b6117fc8383836119bc565b600b54600c546040516386e2947b60e01b815260048101929092526024820152604481018290526001600160a01b03848116606483015283811660848301527f000000000000000000000000000000000000000000000000000000000000000016906386e2947b9060a401600060405180830381600087803b15801561188157600080fd5b505af1158015611895573d6000803e3d6000fd5b50505050505050565b6118aa60008585611c04565b506118b760018383611c04565b5050505050565b60006001600160a01b0384163b156119b157604051630a85bd0160e11b81526001600160a01b0385169063150b7a02906119029033908990889088906004016123b6565b6020604051808303816000875af192505050801561193d575060408051601f3d908101601f1916820190925261193a918101906123f3565b60015b611997573d80801561196b576040519150601f19603f3d011682016040523d82523d6000602084013e611970565b606091505b50805161198f5760405162461bcd60e51b81526004016105b990612364565b805181602001fd5b6001600160e01b031916630a85bd0160e11b1490506111ac565b506001949350505050565b6001600160a01b038316611a1757611a1281600880546000838152600960205260408120829055600182018355919091527ff3f7a9fe364faab93b216da50a3214154f22a0a2b415b23a84c8169e8b636ee30155565b611a3a565b816001600160a01b0316836001600160a01b031614611a3a57611a3a8382611a74565b6001600160a01b038216611a51576106ef81611b11565b826001600160a01b0316826001600160a01b0316146106ef576106ef8282611bc0565b60006001611a8184610aad565b611a8b91906122d2565b600083815260076020526040902054909150808214611ade576001600160a01b03841660009081526006602090815260408083208584528252808320548484528184208190558352600790915290208190555b5060009182526007602090815260408084208490556001600160a01b039094168352600681528383209183525290812055565b600854600090611b23906001906122d2565b60008381526009602052604081205460088054939450909284908110611b4b57611b4b61219f565b906000526020600020015490508060088381548110611b6c57611b6c61219f565b6000918252602080832090910192909255828152600990915260408082208490558582528120556008805480611ba457611ba4612410565b6001900381819060005260206000200160009055905550505050565b6000611bcb83610aad565b6001600160a01b039093166000908152600660209081526040808320868452825280832085905593825260079052919091209190915550565b828054611c1090612119565b90600052602060002090601f016020900481019282611c325760008555611c78565b82601f10611c4b5782800160ff19823516178555611c78565b82800160010185558215611c78579182015b82811115611c78578235825591602001919060010190611c5d565b50611c84929150611c88565b5090565b5b80821115611c845760008155600101611c89565b6001600160e01b03198116811461089057600080fd5b600060208284031215611cc557600080fd5b8135611cd081611c9d565b9392505050565b60005b83811015611cf2578181015183820152602001611cda565b83811115610c3b5750506000910152565b60008151808452611d1b816020860160208601611cd7565b601f01601f19169290920160200192915050565b602081526000611cd06020830184611d03565b600060208284031215611d5457600080fd5b5035919050565b80356001600160a01b0381168114611d7257600080fd5b919050565b60008060408385031215611d8a57600080fd5b611d9383611d5b565b946020939093013593505050565b600080600060608486031215611db657600080fd5b611dbf84611d5b565b9250611dcd60208501611d5b565b9150604084013590509250925092565b60008083601f840112611def57600080fd5b50813567ffffffffffffffff811115611e0757600080fd5b602083019150836020828501011115611e1f57600080fd5b9250929050565b60008060008060008060808789031215611e3f57600080fd5b8635955060208701359450604087013567ffffffffffffffff80821115611e6557600080fd5b611e718a838b01611ddd565b90965094506060890135915080821115611e8a57600080fd5b50611e9789828a01611ddd565b979a9699509497509295939492505050565b600060208284031215611ebb57600080fd5b611cd082611d5b565b600060808284031215611ed657600080fd5b50919050565b600080600060c08486031215611ef157600080fd5b611efa84611d5b565b925060208401359150611f108560408601611ec4565b90509250925092565b80358015158114611d7257600080fd5b60008060008060e08587031215611f3f57600080fd5b611f4885611d5b565b9350611f5660208601611d5b565b9250611f6460408601611f19565b9150611f738660608701611ec4565b905092959194509250565b60008060408385031215611f9157600080fd5b611f9a83611d5b565b9150611fa860208401611f19565b90509250929050565b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f1916810167ffffffffffffffff81118282101715611ff057611ff0611fb1565b604052919050565b600067ffffffffffffffff82111561201257612012611fb1565b50601f01601f191660200190565b6000806000806080858703121561203657600080fd5b61203f85611d5b565b935061204d60208601611d5b565b925060408501359150606085013567ffffffffffffffff81111561207057600080fd5b8501601f8101871361208157600080fd5b803561209461208f82611ff8565b611fc7565b8181528860208385010111156120a957600080fd5b8160208401602083013760006020838301015280935050505092959194509250565b60008060a083850312156120de57600080fd5b82359150611fa88460208501611ec4565b6000806040838503121561210257600080fd5b61210b83611d5b565b9150611fa860208401611d5b565b600181811c9082168061212d57607f821691505b60208210811415611ed657634e487b7160e01b600052602260045260246000fd5b60208082526031908201527f4552433732313a207472616e736665722063616c6c6572206973206e6f74206f6040820152701ddb995c881b9bdc88185c1c1c9bdd9959607a1b606082015260800190565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b60006000198214156121df576121df6121b5565b5060010190565b6000608082840312156121f857600080fd5b6040516080810181811067ffffffffffffffff8211171561221b5761221b611fb1565b604052823560ff8116811461222f57600080fd5b808252506020830135602082015260408301356040820152606083013560608201528091505092915050565b60006020828403121561226d57600080fd5b815167ffffffffffffffff81111561228457600080fd5b8201601f8101841361229557600080fd5b80516122a361208f82611ff8565b8181528560208385010111156122b857600080fd5b6122c9826020830160208601611cd7565b95945050505050565b6000828210156122e4576122e46121b5565b500390565b600082198211156122fc576122fc6121b5565b500190565b81835281816020850137506000828201602090810191909152601f909101601f19169091010190565b60608152600061233e606083018789612301565b8281036020840152612351818688612301565b9150508260408301529695505050505050565b60208082526032908201527f4552433732313a207472616e7366657220746f206e6f6e20455243373231526560408201527131b2b4bb32b91034b6b83632b6b2b73a32b960711b606082015260800190565b6001600160a01b03858116825284166020820152604081018390526080606082018190526000906123e990830184611d03565b9695505050505050565b60006020828403121561240557600080fd5b8151611cd081611c9d565b634e487b7160e01b600052603160045260246000fdfea26469706673582212206a02a5ff6d66aef8e2b9861c92f3f57fb983e0036e87bf1d742ed67c370c2c7464736f6c634300080a0033";

type CollectNFTConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: CollectNFTConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class CollectNFT__factory extends ContractFactory {
  constructor(...args: CollectNFTConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    hub: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<CollectNFT> {
    return super.deploy(hub, overrides || {}) as Promise<CollectNFT>;
  }
  getDeployTransaction(
    hub: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(hub, overrides || {});
  }
  attach(address: string): CollectNFT {
    return super.attach(address) as CollectNFT;
  }
  connect(signer: Signer): CollectNFT__factory {
    return super.connect(signer) as CollectNFT__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): CollectNFTInterface {
    return new utils.Interface(_abi) as CollectNFTInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): CollectNFT {
    return new Contract(address, _abi, signerOrProvider) as CollectNFT;
  }
}