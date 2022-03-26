import neo4j, { Session } from "neo4j-driver"
import { NextApiHandler, NextApiRequest } from "next"

export type ApiRequestWithNeo4j = NextApiRequest & {
  neo4j: Session
}

const withNeo4j = (handler: NextApiHandler) => {
  const driver = neo4j.driver(
    process.env.NEO4J_URI,
    neo4j.auth.basic(process.env.NEO4J_USER, process.env.NEO4J_PASSWORD)
  );
  return async (req, res) => {
    req.neo4j = driver.session();
    return handler(req, res);
  };
};

export default withNeo4j;