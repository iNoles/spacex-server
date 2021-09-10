import {RESTDataSource} from 'apollo-datasource-rest';

class SpaceXAPI extends RESTDataSource {
    baseURL = 'https://api.spacexdata.com';

    capsule = ({id}) => this.get(`v4/capsules/${id}`);

    capsules = () => this.get(`v4/capsules/`);

    core = ({id}) => this.get(`v4/cores/${id}`);

    cores = () => this.get(`v4/cores`);

    crew = ({id}) => this.get(`v4/crew/${id}`);

    crews = () => this.get(`v4/crew`);

    dragon = ({id}) => this.get(`v4/dragons/${id}`);

    dragons = () => this.get(`v4/dragons`);

    history = ({id}) => this.get(`v4/history/${id}`);

    histories = () => this.get(`v4/history`);

    company = () => this.get(`v4/company`);

    landingpad = ({id}) => this.get(`v4/landpads/${id}`);

    landingpads = () => this.get(`v4/landpads`);

    launch = ({id}) => this.get(`v5/launches/${id}`);

    launches = async ({
      range, ids,
    }) => {
      if (ids) return ids.map((id: any) => this.launch({id}));
      const launches = await this.get(`v5/launches/${range || ''}`);
      return Array.isArray(launches) ? launches : [launches];
    }

    launchpad = ({id}) => this.get(`v4/launchpads/${id}`);

    launchpads = () => this.get(`v4/launchpads`);

    payload = ({id}) => this.get(`v4/payloads/${id}`);

    payloads = () => this.get(`v4/payloads`);

    roadster = () => this.get(`v4/roadster`);

    rocket = ({id}) => this.get(`v4/rockets/${id}`);

    rockets = () => this.get(`v4/rockets`);

    ship = ({id}) => this.get(`v4/ships/${id}`);

    ships = () => this.get(`v4/ships`);

    starlink = ({id}) => this.get(`v4/starlink/${id}`);

    starlinks = () => this.get(`v4/starlink`);
}

export default SpaceXAPI;
