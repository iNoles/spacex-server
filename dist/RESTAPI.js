"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_datasource_rest_1 = require("apollo-datasource-rest");
class SpaceXAPI extends apollo_datasource_rest_1.RESTDataSource {
    constructor() {
        super(...arguments);
        this.baseURL = 'https://api.spacexdata.com';
        this.capsule = ({ id }) => this.get(`v4/capsules/${id}`);
        this.capsules = ({ range }) => this.get(`v4/capsules/${range || ''}`);
        this.core = ({ id }) => this.get(`v4/cores/${id}`);
        this.cores = () => this.get(`v4/cores`);
        this.dragon = ({ id }) => this.get(`v4/dragons/${id}`);
        this.dragons = () => this.get(`v4/dragons`);
        this.history = ({ id }) => this.get(`v4/history/${id}`);
        this.histories = () => this.get(`v4/history`);
        this.company = () => this.get(`v4/company`);
        this.landingpad = ({ id }) => this.get(`v4/landpads/${id}`);
        this.landingpads = () => this.get(`v4/landpads`);
        this.launch = ({ id }) => this.get(`v5/launches/${id}`);
        this.launches = async ({ range, ids, }) => {
            if (ids)
                return ids.map((id) => this.launch({ id }));
            const launches = await this.get(`v5/launches/${range || ''}`);
            return Array.isArray(launches) ? launches : [launches];
        };
        this.launchpad = ({ id }) => this.get(`v4/launchpads/${id}`);
        this.launchpads = () => this.get(`v4/launchpads`);
        this.payload = ({ id }) => this.get(`v4/payloads/${id}`);
        this.payloads = () => this.get(`v4/payloads`);
        this.roadster = () => this.get(`v4/roadster`);
        this.rocket = ({ id }) => this.get(`v4/rockets/${id}`);
        this.rockets = () => this.get(`v4/rockets`);
        this.ship = ({ id }) => this.get(`v4/ships/${id}`);
        this.ships = () => this.get(`v4/ships`);
        this.starlink = ({ id }) => this.get(`v4/starlink/${id}`);
        this.starlinks = () => this.get(`v4/starlink`);
    }
}
exports.default = SpaceXAPI;
//# sourceMappingURL=RESTAPI.js.map