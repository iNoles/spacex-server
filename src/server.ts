import {ApolloServerPluginDrainHttpServer} from 'apollo-server-core';
import {ApolloServer} from 'apollo-server-fastify';
import {ApolloServerPlugin} from 'apollo-server-plugin-base';
import {fastify, FastifyInstance} from 'fastify';
import typeDefs from './schema';
import resolvers from './resolvers';
import SpaceXAPI from './RESTAPI';

function fastifyAppClosePlugin(app: FastifyInstance): ApolloServerPlugin {
  return {
    async serverWillStart() {
      return {
        async drainServer() {
          await app.close();
        },
      };
    },
  };
}

export async function createApp(): Promise<FastifyInstance> {
  const app = fastify();
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    dataSources: () => ({api: new SpaceXAPI()}),
    plugins: [
      fastifyAppClosePlugin(app),
      ApolloServerPluginDrainHttpServer({httpServer: app.server}),
    ],
  });
  await server.start();
  app.register(server.createHandler());
  return app;
}

async function main() {
  const app = await createApp();
  const port = process.env.PORT || 4000;
  await app.listen(port);
  console.log(`🚀 Server ready at http://localhost:${port}/graphql`);
}

if (require.main === module) {
  main();
}
