/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from 'ethers'
import { FunctionFragment, Result } from '@ethersproject/abi'
import { Listener, Provider } from '@ethersproject/providers'
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from './common'

export interface HelperInterface extends utils.Interface {
  functions: {
    'batchDelegate(address,address,address)': FunctionFragment
    'getBlockNumber()': FunctionFragment
  }

  encodeFunctionData(
    functionFragment: 'batchDelegate',
    values: [string, string, string]
  ): string
  encodeFunctionData(
    functionFragment: 'getBlockNumber',
    values?: undefined
  ): string

  decodeFunctionResult(
    functionFragment: 'batchDelegate',
    data: BytesLike
  ): Result
  decodeFunctionResult(
    functionFragment: 'getBlockNumber',
    data: BytesLike
  ): Result

  events: {}
}

export interface Helper extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this
  attach(addressOrName: string): this
  deployed(): Promise<this>

  interface: HelperInterface

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>
  listeners(eventName?: string): Array<Listener>
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this
  removeAllListeners(eventName?: string): this
  off: OnEvent<this>
  on: OnEvent<this>
  once: OnEvent<this>
  removeListener: OnEvent<this>

  functions: {
    batchDelegate(
      nft: string,
      first: string,
      second: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>

    getBlockNumber(overrides?: CallOverrides): Promise<[BigNumber]>
  }

  batchDelegate(
    nft: string,
    first: string,
    second: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>

  getBlockNumber(overrides?: CallOverrides): Promise<BigNumber>

  callStatic: {
    batchDelegate(
      nft: string,
      first: string,
      second: string,
      overrides?: CallOverrides
    ): Promise<void>

    getBlockNumber(overrides?: CallOverrides): Promise<BigNumber>
  }

  filters: {}

  estimateGas: {
    batchDelegate(
      nft: string,
      first: string,
      second: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>

    getBlockNumber(overrides?: CallOverrides): Promise<BigNumber>
  }

  populateTransaction: {
    batchDelegate(
      nft: string,
      first: string,
      second: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>

    getBlockNumber(overrides?: CallOverrides): Promise<PopulatedTransaction>
  }
}
