import {ApolloServerPluginDrainHttpServer} from 'apollo-server-core';
import {ApolloServer} from 'apollo-server-fastify';
import {fastify, FastifyInstance} from 'fastify';
import {makeExecutableSchema} from '@graphql-tools/schema';
import typeDefs from './schema';
import resolvers from './resolvers';
import SpaceXAPI from './RESTAPI';
import fastifyAppClosePlugin from './plugin';
import {
  typeDefs as scalarTypeDefs,
  resolvers as scalarResolvers,
} from 'graphql-scalars';

const schema = makeExecutableSchema({
  typeDefs: [typeDefs, ...scalarTypeDefs],
  resolvers: {...resolvers, ...scalarResolvers},
});

export async function createApp(): Promise<FastifyInstance> {
  const app = fastify();
  const server = new ApolloServer({
    schema,
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
