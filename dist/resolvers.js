"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const resolvers = {
    Query: {
        capsule: (_, { id }, { dataSources }) => dataSources.api.capsule({ id }),
        capsules: (_, { range }, { dataSources }) => dataSources.api.capsules({ range }),
        core: (_, { id }, { dataSources }) => dataSources.api.core({ id }),
        cores: (_, {}, { dataSources }) => dataSources.api.cores(),
        dragon: (_, { id }, { dataSources }) => dataSources.api.dragon({ id }),
        dragons: (_, {}, { dataSources }) => dataSources.api.dragons(),
        history: (_, { id }, { dataSources }) => dataSources.api.history({ id }),
        histories: (_, {}, { dataSources }) => dataSources.api.histories(),
        company: (_, __, { dataSources }) => dataSources.api.company(),
        landingpad: (_, { id }, { dataSources }) => dataSources.api.landingpad({ id }),
        landingpads: (_, {}, { dataSources }) => dataSources.api.landingpads(),
        launch: (_, { id }, { dataSources }) => dataSources.api.launch({ id }),
        launches: (_, { range, ids, }, { dataSources }) => dataSources.api.launches({
            range, ids,
        }),
        launchpad: (_, { id }, { dataSources }) => dataSources.api.launchpad({ id }),
        launchpads: (_, {}, { dataSources }) => dataSources.api.launchpads(),
        payload: (_, { id }, { dataSources }) => dataSources.api.payload({ id }),
        payloads: (_, {}, { dataSources }) => dataSources.api.payloads(),
        roadster: (_, __, { dataSources }) => dataSources.api.roadster(),
        rocket: (_, { id }, { dataSources }) => dataSources.api.rocket({ id }),
        rockets: (_, {}, { dataSources }) => dataSources.api.rockets(),
        ship: (_, { id }, { dataSources }) => dataSources.api.ship({ id }),
        ships: (_, {}, { dataSources }) => dataSources.api.ships(),
        starlink: (_, { id }, { dataSources }) => dataSources.api.starlink({ id }),
        starlinks: (_, {}, { dataSources }) => dataSources.api.starlinks(),
    },
};
exports.default = resolvers;
//# sourceMappingURL=resolvers.js.map