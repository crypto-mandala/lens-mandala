const neo4j = require("neo4j-driver")
const { BigNumber } = require("ethers");
const { exit } = require("process");
require('dotenv').config();

const main = async() => {
  const driver = neo4j.driver(
    process.env.NEO4J_URI,
    neo4j.auth.basic(process.env.NEO4J_USER, process.env.NEO4J_PASSWORD)
  )
  const session = driver.session();

  const params = {
    lensHubAddress: '0xE00dc8CB3a7c3F8E5ab5286Afabb0c2D1054187b',
    profileId: BigNumber.from(3).toBigInt(),
    targetProfileId: BigNumber.from(2).toBigInt(),
    targetPubId: BigNumber.from(11).toBigInt()
  }
  const writeQuery = `
  MATCH
  (pf:Profile {
    lensHubAddress: $params.lensHubAddress,
    profileId: $params.profileId
  })
  MATCH
  (pb:Pub {
    lensHubAddress: $params.lensHubAddress,
    profileId: $params.targetProfileId,
    pubId: $params.targetPubId
  })
  MERGE
  (cl:Collect {
    lensHubAddress: $params.lensHubAddress,
    profileId: $params.targetProfileId,
    type: 'pub',
    pubId: $params.targetPubId
  })
  MERGE
  (pf)-[:COLLECT]->(cl)-[:REF]->(pb)
  RETURN pf;`

  await session.writeTransaction(tx =>
    tx.run(writeQuery, { params })
  )
  
  await session.close()
  exit(0)
}

main()