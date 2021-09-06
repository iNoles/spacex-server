const resolvers = {
  Query: {
    capsule: (_: any, {id}: any, {dataSources}: any,
    ) => dataSources.api.capsule({id}),
    capsules: (_: any, {range}: any,
        {dataSources}: any) => dataSources.api.capsules({range}),

    core: (_: any, {id}: any, {dataSources}: any,
    ) => dataSources.api.core({id}),
    cores: (_: any, {}: any,
        {dataSources}: any) => dataSources.api.cores(),

    dragon: (_: any, {id}: any, {dataSources}: any,
    ) => dataSources.api.dragon({id}),
    dragons: (_: any, {}: any,
        {dataSources}: any) => dataSources.api.dragons(),

    history: (_: any, {id}: any, {dataSources}: any,
    ) => dataSources.api.history({id}),
    histories: (_: any, {}: any,
        {dataSources}: any) => dataSources.api.histories(),

    company: (_: any, __: any, {dataSources}: any) => dataSources.api.company(),

    landingpad: (_: any, {id}: any, {dataSources}: any,
    ) => dataSources.api.landingpad({id}),
    landingpads: (_: any, {}: any,
        {dataSources}: any) => dataSources.api.landingpads(),

    launch: (_: any, {id}: any, {dataSources}: any,
    ) => dataSources.api.launch({id}),
    launches: (_: any, {
      range, ids,
    }: any, {dataSources}: any) => dataSources.api.launches({
      range, ids,
    }),

    launchpad: (_: any, {id}: any, {dataSources}: any,
    ) => dataSources.api.launchpad({id}),
    launchpads: (_: any, {}: any, {dataSources}: any,
    ) => dataSources.api.launchpads(),

    payload: (_: any, {id}: any, {dataSources}: any,
    ) => dataSources.api.payload({id}),
    payloads: (_: any, {}: any,
        {dataSources}: any) => dataSources.api.payloads(),

    roadster: (_: any, __: any, {dataSources}: any,
    ) => dataSources.api.roadster(),

    rocket: (_: any, {id}: any, {dataSources}: any,
    ) => dataSources.api.rocket({id}),
    rockets: (_: any, {}: any,
        {dataSources}: any) => dataSources.api.rockets(),

    ship: (_: any, {id}: any, {dataSources}: any) => dataSources.api.ship({id}),
    ships: (_: any, {}: any,
        {dataSources}: any) => dataSources.api.ships(),

    starlink: (_: any, {id}: any, {dataSources}: any,
    ) => dataSources.api.starlink({id}),
    starlinks: (_: any, {}: any,
        {dataSources}: any) => dataSources.api.starlinks(),
  },
};

export default resolvers;
