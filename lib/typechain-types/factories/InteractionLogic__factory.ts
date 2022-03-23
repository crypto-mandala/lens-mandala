/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  InteractionLogic,
  InteractionLogicInterface,
} from "../InteractionLogic";

const _abi = [
  {
    inputs: [],
    name: "ArrayMismatch",
    type: "error",
  },
  {
    inputs: [],
    name: "PublicationDoesNotExist",
    type: "error",
  },
  {
    inputs: [],
    name: "TokenDoesNotExist",
    type: "error",
  },
];

const _bytecode =
  "0x6110ec61003a600b82828239805160001a60731461002d57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600436106100405760003560e01c8063bccbaefd14610045578063cd339bc414610067575b600080fd5b81801561005157600080fd5b50610065610060366004610b8d565b610087565b005b81801561007357600080fd5b50610065610082366004610c31565b61052d565b8584146100a75760405163b7c1140d60e01b815260040160405180910390fd5b60005b868110156105225760008360008a8a858181106100c9576100c9610ceb565b90506020020135815260200190815260200160002060030180546100ec90610d01565b80601f016020809104026020016040519081016040528092919081815260200182805461011890610d01565b80156101655780601f1061013a57610100808354040283529160200191610165565b820191906000526020600020905b81548152906001019060200180831161014857829003601f168201915b5050505050905088888381811061017e5761017e610ceb565b905060200201358360008380519060200120815260200190815260200160002054146101bd5760405163677510db60e11b815260040160405180910390fd5b60008460008b8b868181106101d4576101d4610ceb565b602090810292909201358352508101919091526040016000908120600101546001600160a01b0316915085818c8c8781811061021257610212610ceb565b60209081029290920135835250810191909152604001600020600201546001600160a01b031690508061040557610248876108c1565b9050808660008d8d8881811061026057610260610ceb565b90506020020135815260200190815260200160002060020160006101000a8154816001600160a01b0302191690836001600160a01b031602179055506000836102a890610d3c565b90506000846040518060400160405280600981526020016816a337b63637bbb2b960b91b8152506040516020016102e0929190610da3565b60408051601f19818403018152828201825260038352620b519b60ea1b602084810191909152915190935060009261031a92869201610dd2565b6040516020818303038152906040529050836001600160a01b031663eedfca5f8f8f8a81811061034c5761034c610ceb565b9050602002013584846040518463ffffffff1660e01b815260040161037393929190610e2f565b600060405180830381600087803b15801561038d57600080fd5b505af11580156103a1573d6000803e3d6000fd5b50505050836001600160a01b03168e8e898181106103c1576103c1610ceb565b905060200201357f44403e38baed5e40df7f64ff8708b076c75a0dfda8380e75df5c36f11a476743426040516103f991815260200190565b60405180910390a35050505b6040516335313c2160e11b81526001600160a01b038d81166004830152821690636a62784290602401600060405180830381600087803b15801561044857600080fd5b505af115801561045c573d6000803e3d6000fd5b505050506001600160a01b0382161561050e57816001600160a01b0316630e096ae18d8d8d8881811061049157610491610ceb565b905060200201358c8c898181106104aa576104aa610ceb565b90506020028101906104bc9190610e64565b6040518563ffffffff1660e01b81526004016104db9493929190610ed4565b600060405180830381600087803b1580156104f557600080fd5b505af1158015610509573d6000803e3d6000fd5b505050505b5050508061051b90610f12565b90506100aa565b505050505050505050565b600080600061053d8a8a87610962565b60008381526020898152604080832085845290915290206005015492955090935091506001600160a01b03168061079857610577876108c1565b600085815260208881526040808320878452825280832060050180546001600160a01b0319166001600160a01b038616179055878352908890528120600301805492935090916105c690610d01565b80601f01602080910402602001604051908101604052809291908181526020018280546105f290610d01565b801561063f5780601f106106145761010080835404028352916020019161063f565b820191906000526020600020905b81548152906001019060200180831161062257829003601f168201915b5050505050905060008161065290610d3c565b9050600082604051806040016040528060098152602001682d436f6c6c6563742d60b81b81525061068288610a24565b60405160200161069493929190610f2d565b60408051601f1981840301815282820190915260048252632d436c2d60e01b6020830152915060009083906106c889610a24565b6040516020016106da93929190610f70565b60408051601f1981840301815290829052631fd3c60560e11b825291506001600160a01b03861690633fa78c0a9061071c908b908b9087908790600401610fb7565b600060405180830381600087803b15801561073657600080fd5b505af115801561074a573d6000803e3d6000fd5b50505050846001600160a01b031687897f0b227b550ffed48af813b32e246f787e99581ee13206ba8f9d90d63615269b3f4260405161078b91815260200190565b60405180910390a4505050505b6040516335313c2160e11b81526001600160a01b038d81166004830152821690636a62784290602401600060405180830381600087803b1580156107db57600080fd5b505af11580156107ef573d6000803e3d6000fd5b50505050816001600160a01b031663e49c3dda8c8e87878e8e6040518763ffffffff1660e01b815260040161082996959493929190610ff3565b600060405180830381600087803b15801561084357600080fd5b505af1158015610857573d6000803e3d6000fd5b50505050898b8d6001600160a01b03167f9e48e42df0747083f09111bd5a1d577e07fb9ef3a10a11a77eec61699396c4f08787426040516108ab939291909283526020830191909152604082015260600190565b60405180910390a4505050505050505050505050565b6000604051733d602d80600a3d3981f3363d3d373d3d3d363d7360601b81528260601b60148201526e5af43d82803e903d91602b57fd5bf360881b60288201526037816000f09150506001600160a01b03811661095d5760405162461bcd60e51b8152602060048201526016602482015275115490cc4c4d8dce8818dc99585d194819985a5b195960521b604482015260640160405180910390fd5b919050565b600083815260208281526040808320858452909152812060040154819081906001600160a01b0316801561099d578693508592509050610a1b565b600087815260208681526040808320898452909152902054806109d35760405163a43d2a7160e01b815260040160405180910390fd5b6000888152602087815260408083208a84528252808320600101548484528983528184208185529092529091206004015491955093506001600160a01b03169150610a1b9050565b93509350939050565b606081610a485750506040805180820190915260018152600360fc1b602082015290565b8160005b8115610a725780610a5c81610f12565b9150610a6b9050600a83611049565b9150610a4c565b60008167ffffffffffffffff811115610a8d57610a8d61105d565b6040519080825280601f01601f191660200182016040528015610ab7576020820181803683370190505b5090505b8415610b2257610acc600183611073565b9150610ad9600a8661108a565b610ae490603061109e565b60f81b818381518110610af957610af9610ceb565b60200101906001600160f81b031916908160001a905350610b1b600a86611049565b9450610abb565b949350505050565b80356001600160a01b038116811461095d57600080fd5b60008083601f840112610b5357600080fd5b50813567ffffffffffffffff811115610b6b57600080fd5b6020830191508360208260051b8501011115610b8657600080fd5b9250929050565b60008060008060008060008060c0898b031215610ba957600080fd5b610bb289610b2a565b9750602089013567ffffffffffffffff80821115610bcf57600080fd5b610bdb8c838d01610b41565b909950975060408b0135915080821115610bf457600080fd5b50610c018b828c01610b41565b9096509450610c14905060608a01610b2a565b92506080890135915060a089013590509295985092959890939650565b60008060008060008060008060e0898b031215610c4d57600080fd5b610c5689610b2a565b97506020890135965060408901359550606089013567ffffffffffffffff80821115610c8157600080fd5b818b0191508b601f830112610c9557600080fd5b813581811115610ca457600080fd5b8c6020828501011115610cb657600080fd5b602083019750809650505050610cce60808a01610b2a565b925060a0890135915060c089013590509295985092959890939650565b634e487b7160e01b600052603260045260246000fd5b600181811c90821680610d1557607f821691505b60208210811415610d3657634e487b7160e01b600052602260045260246000fd5b50919050565b805160208201516001600160e01b03198082169291906004831015610d6b5780818460040360031b1b83161693505b505050919050565b60005b83811015610d8e578181015183820152602001610d76565b83811115610d9d576000848401525b50505050565b60008351610db5818460208801610d73565b835190830190610dc9818360208801610d73565b01949350505050565b6001600160e01b0319831681528151600090610df5816004850160208701610d73565b919091016004019392505050565b60008151808452610e1b816020860160208601610d73565b601f01601f19169290920160200192915050565b838152606060208201526000610e486060830185610e03565b8281036040840152610e5a8185610e03565b9695505050505050565b6000808335601e19843603018112610e7b57600080fd5b83018035915067ffffffffffffffff821115610e9657600080fd5b602001915036819003821315610b8657600080fd5b81835281816020850137506000828201602090810191909152601f909101601f19169091010190565b60018060a01b0385168152836020820152606060408201526000610e5a606083018486610eab565b634e487b7160e01b600052601160045260246000fd5b6000600019821415610f2657610f26610efc565b5060010190565b60008451610f3f818460208901610d73565b845190830190610f53818360208901610d73565b8451910190610f66818360208801610d73565b0195945050505050565b6001600160e01b0319841681528251600090610f93816004850160208801610d73565b835190830190610faa816004840160208801610d73565b0160040195945050505050565b848152836020820152608060408201526000610fd66080830185610e03565b8281036060840152610fe88185610e03565b979650505050505050565b86815260018060a01b038616602082015284604082015283606082015260a06080820152600061102760a083018486610eab565b98975050505050505050565b634e487b7160e01b600052601260045260246000fd5b60008261105857611058611033565b500490565b634e487b7160e01b600052604160045260246000fd5b60008282101561108557611085610efc565b500390565b60008261109957611099611033565b500690565b600082198211156110b1576110b1610efc565b50019056fea26469706673582212208fd76eddf98703fbff409c1207402bb4a09963df0ac42ad45a46fa2385d5548e64736f6c634300080a0033";

type InteractionLogicConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: InteractionLogicConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class InteractionLogic__factory extends ContractFactory {
  constructor(...args: InteractionLogicConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<InteractionLogic> {
    return super.deploy(overrides || {}) as Promise<InteractionLogic>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): InteractionLogic {
    return super.attach(address) as InteractionLogic;
  }
  connect(signer: Signer): InteractionLogic__factory {
    return super.connect(signer) as InteractionLogic__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): InteractionLogicInterface {
    return new utils.Interface(_abi) as InteractionLogicInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): InteractionLogic {
    return new Contract(address, _abi, signerOrProvider) as InteractionLogic;
  }
}
