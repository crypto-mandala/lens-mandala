/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
  BytesLike,
  CallOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from 'ethers'
import { FunctionFragment, Result } from '@ethersproject/abi'
import { Listener, Provider } from '@ethersproject/providers'
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from './common'

export interface FeeModuleBaseInterface extends utils.Interface {
  functions: {
    'MODULE_GLOBALS()': FunctionFragment
  }

  encodeFunctionData(
    functionFragment: 'MODULE_GLOBALS',
    values?: undefined
  ): string

  decodeFunctionResult(
    functionFragment: 'MODULE_GLOBALS',
    data: BytesLike
  ): Result

  events: {}
}

export interface FeeModuleBase extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this
  attach(addressOrName: string): this
  deployed(): Promise<this>

  interface: FeeModuleBaseInterface

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
    MODULE_GLOBALS(overrides?: CallOverrides): Promise<[string]>
  }

  MODULE_GLOBALS(overrides?: CallOverrides): Promise<string>

  callStatic: {
    MODULE_GLOBALS(overrides?: CallOverrides): Promise<string>
  }

  filters: {}

  estimateGas: {
    MODULE_GLOBALS(overrides?: CallOverrides): Promise<BigNumber>
  }

  populateTransaction: {
    MODULE_GLOBALS(overrides?: CallOverrides): Promise<PopulatedTransaction>
  }
}
