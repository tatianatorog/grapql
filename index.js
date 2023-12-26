import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

// db
import db from "./_db.js";

//types
import { typeDefs } from "./schema.js";

const resolvers = {
  Query: {
    reviews: () => db.reviews,
    games: () => db.games,
    authors: () => db.authors,
  },
};
// server setup
const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
const { url } = await startStandaloneServer(server, { listen: { port: 4008 } });
// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.

