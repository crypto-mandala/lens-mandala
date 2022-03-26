/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from 'ethers'
import { FunctionFragment, Result } from '@ethersproject/abi'
import { Listener, Provider } from '@ethersproject/providers'
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from './common'

export type ProfileStructStruct = {
  pubCount: BigNumberish
  followModule: string
  followNFT: string
  handle: string
  imageURI: string
  followNFTURI: string
}

export type ProfileStructStructOutput = [
  BigNumber,
  string,
  string,
  string,
  string,
  string
] & {
  pubCount: BigNumber
  followModule: string
  followNFT: string
  handle: string
  imageURI: string
  followNFTURI: string
}

export type PublicationStructStruct = {
  profileIdPointed: BigNumberish
  pubIdPointed: BigNumberish
  contentURI: string
  referenceModule: string
  collectModule: string
  collectNFT: string
}

export type PublicationStructStructOutput = [
  BigNumber,
  BigNumber,
  string,
  string,
  string,
  string
] & {
  profileIdPointed: BigNumber
  pubIdPointed: BigNumber
  contentURI: string
  referenceModule: string
  collectModule: string
  collectNFT: string
}

export type LatestDataStruct = {
  profileStruct: ProfileStructStruct
  publicationStruct: PublicationStructStruct
}

export type LatestDataStructOutput = [
  ProfileStructStructOutput,
  PublicationStructStructOutput
] & {
  profileStruct: ProfileStructStructOutput
  publicationStruct: PublicationStructStructOutput
}

export interface UIDataProviderInterface extends utils.Interface {
  functions: {
    'getLatestDataByHandle(string)': FunctionFragment
    'getLatestDataByProfile(uint256)': FunctionFragment
  }

  encodeFunctionData(
    functionFragment: 'getLatestDataByHandle',
    values: [string]
  ): string
  encodeFunctionData(
    functionFragment: 'getLatestDataByProfile',
    values: [BigNumberish]
  ): string

  decodeFunctionResult(
    functionFragment: 'getLatestDataByHandle',
    data: BytesLike
  ): Result
  decodeFunctionResult(
    functionFragment: 'getLatestDataByProfile',
    data: BytesLike
  ): Result

  events: {}
}

export interface UIDataProvider extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this
  attach(addressOrName: string): this
  deployed(): Promise<this>

  interface: UIDataProviderInterface

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
    getLatestDataByHandle(
      handle: string,
      overrides?: CallOverrides
    ): Promise<[LatestDataStructOutput]>

    getLatestDataByProfile(
      profileId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[LatestDataStructOutput]>
  }

  getLatestDataByHandle(
    handle: string,
    overrides?: CallOverrides
  ): Promise<LatestDataStructOutput>

  getLatestDataByProfile(
    profileId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<LatestDataStructOutput>

  callStatic: {
    getLatestDataByHandle(
      handle: string,
      overrides?: CallOverrides
    ): Promise<LatestDataStructOutput>

    getLatestDataByProfile(
      profileId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<LatestDataStructOutput>
  }

  filters: {}

  estimateGas: {
    getLatestDataByHandle(
      handle: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>

    getLatestDataByProfile(
      profileId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>
  }

  populateTransaction: {
    getLatestDataByHandle(
      handle: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>

    getLatestDataByProfile(
      profileId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>
  }
}
