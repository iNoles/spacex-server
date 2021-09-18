import {ApolloServerPluginDrainHttpServer} from 'apollo-server-core';
import {ApolloServer} from 'apollo-server-fastify';
import {fastify, FastifyInstance} from 'fastify';
import typeDefs from './schema';
import resolvers from './resolvers';
import SpaceXAPI from './RESTAPI';
import fastifyAppClosePlugin from './plugin';

export async function createApp(): Promise<FastifyInstance> {
  const app = fastify();
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    introspection: true,
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
