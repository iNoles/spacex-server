import {RESTDataSource} from 'apollo-datasource-rest';
import body from './utils';

class SpaceXAPI extends RESTDataSource {
    baseURL = 'https://api.spacexdata.com';

    capsule = ({id}) => this.get(`v4/capsules/${id}`);

    capsules = ({
      limit, offset, order, sort,
    }) => this.post(`v4/capsules/query`, body({
      limit, offset, order, sort,
    }));

    core = ({id}) => this.get(`v4/cores/${id}`);

    cores = ({
      limit, offset, order, sort,
    }) => this.post(`v4/cores/query`, body({
      limit, offset, order, sort,
    }));

    crew = ({id}) => this.get(`v4/crew/${id}`);

    crews = ({
      limit, offset, order, sort,
    }) => this.post(`v4/crew/query`, body({
      limit, offset, order, sort,
    }));

    dragon = ({id}) => this.get(`v4/dragons/${id}`);

    dragons = ({limit, offset}) => this.post(`v4/dragons/query`, body({
      limit, offset,
    }));

    history = ({id}) => this.get(`v4/history/${id}`);

    histories = ({
      limit, offset, order, sort,
    }) => this.post(`v4/history/query`, body({
      limit, offset, order, sort,
    }));

    company = () => this.get(`v4/company`);

    landingpad = ({id}) => this.get(`v4/landpads/${id}`);

    landingpads = ({
      limit, offset,
    }) => this.post(`v4/landpads/query`, body({limit, offset}));

    launch = ({id}) => this.get(`v5/launches/${id}`);

    launches = async ({
      range, ids,
    }) => {
      if (ids) return ids.map((id: any) => this.launch({id}));
      const launches = await this.get(`v5/launches/${range || ''}`);
      return Array.isArray(launches) ? launches : [launches];
    }

    launchpad = ({id}) => this.get(`v4/launchpads/${id}`);

    launchpads = ({limit, offset}) => this.post(`v4/launchpads/query`, body({
      limit, offset,
    }));

    payload = ({id}) => this.get(`v4/payloads/${id}`);

    payloads = ({
      limit, offset, order, sort,
    }) => this.post(`v4/payloads/query`, body({
      limit, offset, order, sort,
    }));

    roadster = () => this.get(`v4/roadster`);

    rocket = ({id}) => this.get(`v4/rockets/${id}`);

    rockets = ({
      limit, offset, order, sort,
    }) => this.post(`v4/rockets/query`, body({
      limit, offset, order, sort,
    }));

    ship = ({id}) => this.get(`v4/ships/${id}`);

    ships = ({
      limit, offset, order, sort,
    }) => this.post(`v4/ships/query`, body({
      limit, offset, order, sort,
    }));

    starlink = ({id}) => this.get(`v4/starlink/${id}`);

    starlinks = ({
      limit, offset, order, sort,
    }) => this.post(`v4/starlink/query`, body({
      limit, offset, order, sort,
    }));
}

export default SpaceXAPI;
