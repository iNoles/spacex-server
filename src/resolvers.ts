const resolvers = {
  Query: {
    capsule: (_: any, {id}: any,
        {dataSources}: any) => dataSources.api.capsule({id}),
    capsules: async (_: any, {
      limit, offset, order, sort,
    }: any, {dataSources}: any) => {
      const results = await dataSources.api.capsules({
        limit, offset, order, sort,
      });
      return results['docs'];
    },

    core: (_: any, {id}: any, {dataSources}: any) => dataSources.api.core({id}),
    cores: async (_: any, {
      limit, offset, order, sort,
    }: any, {dataSources}: any) => {
      const results = await dataSources.api.cores({
        limit, offset, order, sort,
      });
      return results['docs'];
    },

    crew: (_: any, {id}: any,
        {dataSources}: any) => dataSources.api.crew({id}),
    crews: async (_: any, {limit, offset, order, sort}: any,
        {dataSources}: any) => {
      const results = await dataSources.api.crews({
        limit, offset, order, sort,
      });
      return results['docs'];
    },

    dragon: (_: any, {id}: any,
        {dataSources}: any) => dataSources.api.dragon({id}),
    dragons: async (_: any, {limit, offset}: any,
        {dataSources}: any) => {
      const results = await dataSources.api.dragons({limit, offset});
      return results['docs'];
    },

    history: (_: any, {id}: any,
        {dataSources}: any) => dataSources.api.history({id}),
    histories: async (_: any, {limit, offset, order, sort}: any,
        {dataSources}: any) => {
      const results = await dataSources.api.histories({
        limit, offset, order, sort,
      });
      return results['docs'];
    },

    company: (_: any, __: any, {dataSources}: any) => dataSources.api.company(),

    landingpad: (_: any, {id}: any,
        {dataSources}: any) => dataSources.api.landingpad({id}),
    landingpads: async (_: any, {limit, offset}: any,
        {dataSources}: any) => {
      const results = await dataSources.api.landingpads({limit, offset});
      return results['docs'];
    },

    launch: (_: any, {id}: any, {dataSources}: any,
    ) => dataSources.api.launch({id}),
    launches: (_: any, {
      range, ids,
    }: any, {dataSources}: any) => dataSources.api.launches({
      range, ids,
    }),

    launchpad: (_: any, {id}: any,
        {dataSources}: any) => dataSources.api.launchpad({id}),
    launchpads: async (_: any, {limit, offset}: any,
        {dataSources}: any) => {
      const results = await dataSources.api.launchpads({limit, offset});
      return results['docs'];
    },

    payload: (_: any, {id}: any,
        {dataSources}: any) => dataSources.api.payload({id}),
    payloads: async (_: any, {
      limit, offset, order, sort,
    }: any, {dataSources}: any) => {
      const results = await dataSources.api.payloads({
        limit, offset, order, sort,
      });
      return results['docs'];
    },

    roadster: (_: any, __: any,
        {dataSources}: any) => dataSources.api.roadster(),

    rocket: (_: any, {id}: any,
        {dataSources}: any) => dataSources.api.rocket({id}),
    rockets: async (_: any, {
      limit, offset, order, sort,
    }: any, {dataSources}: any) => {
      const results = await dataSources.api.rockets({
        limit, offset, order, sort,
      });
      return results['docs'];
    },

    ship: (_: any, {id}: any, {dataSources}: any) => dataSources.api.ship({id}),
    ships: async (_: any, {
      limit, offset, order, sort,
    }: any, {dataSources}: any) => {
      const results = await dataSources.api.ships({
        limit, offset, order, sort,
      });
      return results['docs'];
    },

    starlink: (_: any, {id}: any,
        {dataSources}: any ) => dataSources.api.starlink({id}),
    starlinks: async (_: any, {
      limit, offset, order, sort,
    }: any, {dataSources}: any) => {
      const results = await dataSources.api.starlinks({
        limit, offset, order, sort,
      });
      return results['docs'];
    },
  },
};

export default resolvers;
