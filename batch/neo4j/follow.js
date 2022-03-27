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
    fromProfileId: BigNumber.from(1).toBigInt(),
    toProfileId: BigNumber.from(2).toBigInt(),
  }
  const writeQuery = `
  MATCH
  (from:Profile {
    lensHubAddress: $params.lensHubAddress,
    profileId: $params.fromProfileId
  })
  MATCH
  (to:Profile {
    lensHubAddress: $params.lensHubAddress,
    profileId: $params.toProfileId
  })
  MERGE
  (from)-[:FOLLOW]->(to)
  RETURN from,to;`

  await session.writeTransaction(tx =>
    tx.run(writeQuery, { params })
  )
  
  await session.close()
  exit(0)
}

main()