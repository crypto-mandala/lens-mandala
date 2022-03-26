/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from 'ethers'
import { Provider } from '@ethersproject/providers'
import type {
  FollowValidatorFollowModuleBase,
  FollowValidatorFollowModuleBaseInterface,
} from '../FollowValidatorFollowModuleBase'

const _abi = [
  {
    inputs: [],
    name: 'FollowInvalid',
    type: 'error',
  },
  {
    inputs: [],
    name: 'InitParamsInvalid',
    type: 'error',
  },
  {
    inputs: [],
    name: 'HUB',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'profileId',
        type: 'uint256',
      },
      {
        internalType: 'address',
        name: 'from',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'to',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'followNFTTokenId',
        type: 'uint256',
      },
    ],
    name: 'followModuleTransferHook',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'profileId',
        type: 'uint256',
      },
      {
        internalType: 'bytes',
        name: 'data',
        type: 'bytes',
      },
    ],
    name: 'initializeFollowModule',
    outputs: [
      {
        internalType: 'bytes',
        name: '',
        type: 'bytes',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'follower',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'profileId',
        type: 'uint256',
      },
      {
        internalType: 'bytes',
        name: 'data',
        type: 'bytes',
      },
    ],
    name: 'processFollow',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'profileId',
        type: 'uint256',
      },
      {
        internalType: 'address',
        name: 'follower',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'followNFTTokenId',
        type: 'uint256',
      },
    ],
    name: 'validateFollow',
    outputs: [],
    stateMutability: 'view',
    type: 'function',
  },
]

export class FollowValidatorFollowModuleBase__factory {
  static readonly abi = _abi
  static createInterface(): FollowValidatorFollowModuleBaseInterface {
    return new utils.Interface(_abi) as FollowValidatorFollowModuleBaseInterface
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): FollowValidatorFollowModuleBase {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as FollowValidatorFollowModuleBase
  }
}
