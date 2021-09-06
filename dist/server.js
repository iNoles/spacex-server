"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createApp = void 0;
const apollo_server_core_1 = require("apollo-server-core");
const apollo_server_fastify_1 = require("apollo-server-fastify");
const fastify_1 = require("fastify");
const schema_1 = __importDefault(require("./schema"));
const resolvers_1 = __importDefault(require("./resolvers"));
const RESTAPI_1 = __importDefault(require("./RESTAPI"));
function fastifyAppClosePlugin(app) {
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
async function createApp() {
    const app = (0, fastify_1.fastify)();
    const server = new apollo_server_fastify_1.ApolloServer({
        typeDefs: schema_1.default,
        resolvers: resolvers_1.default,
        dataSources: () => ({ api: new RESTAPI_1.default() }),
        plugins: [
            fastifyAppClosePlugin(app),
            (0, apollo_server_core_1.ApolloServerPluginDrainHttpServer)({ httpServer: app.server }),
        ],
    });
    await server.start();
    app.register(server.createHandler());
    return app;
}
exports.createApp = createApp;
async function main() {
    const app = await createApp();
    const port = process.env.PORT || 4000;
    await app.listen(port);
    console.log(`🚀 Server ready at http://localhost:${port}/graphql`);
}
if (require.main === module) {
    main();
}
//# sourceMappingURL=server.js.map