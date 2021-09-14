import {FastifyInstance} from 'fastify';
import {ApolloServerPlugin} from 'apollo-server-plugin-base';

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

export default fastifyAppClosePlugin;
