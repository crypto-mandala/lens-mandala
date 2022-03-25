# lens-mandala

## Setup

### Lens Protocol Local Node

Prepare Docker containers:

```
$ git clone git@github.com:crypto-mandala/lens-protocol.git
$ cd lens-protocol
$ touch .env
```

Start Docker containers:

```
$ export USERID=$UID && USERID=$UID docker-compose up -d
```

Start Lens Node in Docker container:

```
$ export USERID=$UID && docker-compose exec contracts-env bash
  export USERID=$UID && USERID=$UID docker-compose exec contracts-env bash

node@ad42b82e0ab9:/src$ npm run compile
node@ad42b82e0ab9:/src$ npx hardhat node
```

Deploy Lens contracts (Open another terminal):

```
$ export USERID=$UID && docker-compose exec contracts-env bash

node@ad42b82e0ab9:/src$ npm run full-deploy-local
```

Cleanup leftover Docker containers:

```
$ USERID=$UID docker-compose down
```

### Connect Local Node

| Param        | Value                 |
| ------------ | --------------------- |
| Network Name | Lens Local            |
| RPC URL      | http://localhost:8545 |
| Chain ID     | 31337                 |
| Symbol       | ETH                   |

### Addresses

#### Localhost

| #   | Type       | Address                                    | Private Key                                                        |
| --- | ---------- | ------------------------------------------ | ------------------------------------------------------------------ |
| 0   |            | 0xc783df8a850f42e7f7e57013759c285caa701eb6 | 0xc5e8f61d1ab959b397eecc0a37a6517b8e67a0e7cf1f4bce5591f3ed80199122 |
| 1   | governance | 0xead9c93b79ae7c1591b1fb5323bd777e86e150d4 | 0xd49743deccbccc5dc7baa8e69e5be03298da8688a15dd202e20f15d5e0e9a9fb |
| 2   | treasury   | 0xe5904695748fe4a84b40b3fc79de2277660bd1d3 | 0x23c601ae397441f3ef6f1075dcb0031ff17fb079837beadaf3c84d96c6f3e569 |
| 3   | user       | 0x92561f28ec438ee9831d00d1d59fbdc981b762b2 | 0xee9d129c1997549ee09c0757af5939b2483d80ad649a0eda68e8b0357ad11131 |
| 4   |            | 0x2ffd013aaa7b5a7da93336c2251075202b33fb2b | 0x87630b2d1de0fbd5044eb6891b3d9d98c34c8d310c852f98550ba774480e47cc |
| 5   |            | 0x9fc9c2dfba3b6cf204c37a5f690619772b926e39 | 0x275cc4a2bfd4f612625204a20a2280ab53a6da2d14860c47a9f5affe58ad86d4 |
| 6   |            | 0xad9fbd38281f615e7df3def2aad18935a9e0ffee | 0xaee25d55ce586148a853ca83fdfacaf7bc42d5762c6e7187e6f8e822d8e6a650 |
| 7   |            | 0x8bffc896d42f07776561a5814d6e4240950d6d3a | 0xa2e0097c961c67ec197b6865d7ecea6caffc68ebeb00e6050368c8f67fc9c588 |

#### Mumbai Testnet

| #   | Type       | Address                                    | Private Key                                                        |
| --- | ---------- | ------------------------------------------ | ------------------------------------------------------------------ |
| 0   |            | 0x6318b90Ab2BD2EfCe16B88f60b04747cE86ac185 | 0x390fc9c6368251426530e000fddda6f5129a494dcc3c51b5c2dc0d4d875a0fa6 |
| 1   | governance | 0xE93d3c4Ddba52B4Bcb2Ea150C8cbAc412890486b | 0xe1f22d18c216702657928a69c6914dac176b054480094c1673ffddd12e60f792 |
| 2   | treasury   | 0x1158b33c4475e69615272B416c48281365FfFC71 | 0x61938fd49ffe065d8a95efb64e354b5e332f879611a46a288948a50eb8e95ac9 |
| 3   | user       | 0x19908A43C5A69DF06F854B4f89BDb7B2DcA7746d | 0x87781e21054c1addaf03036514a253c91229ec46b0cb4ae8f74862cbff5fea11 |

Mnemonic: `derive monkey umbrella trouble wagon order limb victory tourist cement loop wheel`

```
{
  "lensHub proxy": "0xE00dc8CB3a7c3F8E5ab5286Afabb0c2D1054187b",
  "lensHub impl:": "0x21a810e0Daa0BBd04363205580E0af3a180867A4",
  "publishing logic lib": "0x82E01d0e5aE3A65E09708dBa6A2208be48a8c415",
  "interaction logic lib": "0x00963CCD7398B28164a22EA6fEd0Cbbb913a105f",
  "follow NFT impl": "0x12a51512e40af69ae81836b0f196f0f0b087cfac",
  "collect NFT impl": "0x9e831fdf9d633d8af6a09b6c87871321d02710cb",
  "currency": "0xbdcD12A65516B89d058E385c12C1Ed5858109062",
  "periphery data provider": "0x851420c56C3e21271Bf203b4fB99DDa0f31ad130",
  "module globals": "0x03e5eB8bd427c1bbda9061F7DD66aBd709278f92",
  "fee collect module": "0xbb8443701e8401cc0D8A316FB36e3E8aFCf8b9cD",
  "limited fee collect module": "0x65e09A7c6B20249E6D10F595F04cfD75b7F4c33A",
  "timed fee collect module": "0xEB747EeB870eC8B04b45A4DC79c7f38D06402e53",
  "limited timed fee collect module": "0x82e2591e165630F25C6694A6B6e0596BC3eD6F56",
  "revert collect module": "0x3360a79Edcdb97f46E01Fa7B7A02964bA5687B1a",
  "empty collect module": "0x8170E644B461f76EbD91FEB3E75c361a24268e72",
  "fee follow module": "0x8058c633EF17dc4b1AD63A92CafE632D7185a9A8",
  "approval follow module": "0x89e7Fdc0968284e7b374F67b86cC7D4E0ab275b9",
  "follower only reference module": "0x29caEaD5Bccdd15a5E076341F0B06EeC62277059"
}
```
