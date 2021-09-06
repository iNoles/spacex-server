"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_fastify_1 = require("apollo-server-fastify");
const typeDefs = (0, apollo_server_fastify_1.gql) `
    type Query {
        capsule(id: String!): Capsule
        capsules(range: CapsuleRange): [Capsule]
        company: Company
        core(id: String!): Core
        cores: [Core]
        dragon(id: String!): Dragon
        dragons: [Dragon]
        history(id: String!): History
        histories: [History]
        landingpad(id: String!): Landingpad
        landingpads: [Landingpad]
        launch(id: String!): Launch
        launches(range: LaunchRange, ids: [String]): [Launch]
        launchpad(id: String!): Launchpad
        launchpads: [Launchpad]
        payload(id: String!): Payload
        payloads: [Payload]
        roadster: Roadster
        rocket(id: String!): Rocket
        rockets: [Rocket]
        ship(id: String!): Ship
        ships: [Ship]
        starlink(id: String!): StarLink
        starlinks: [StarLink]
    }

    enum CapsuleRange {
        past
        upcoming
    }

    enum LaunchRange {
        latest
        next
        past
        upcoming
    }

    type Capsule {
        serial: String
        status: String
        type: String
        reuse_count: Int
        water_landings: Int
        land_landings: Int
        last_update: String
    }

    type Company {
        name: String
        founder: String
        founded: Int
        employees: Int
        vehicles: Int
        launch_sites: Int
        test_sites: Int
        ceo: String
        cto: String
        cto_propulsion: String
        valuation: Int
        headquarters: Headquarters
        links: Links
        summary: String
    }

    type Headquarters {
        address: String
        city: String
        state: String
    }

    type Links {
        website: String
        flickr: String
        twitter: String
        elon_twitter: String
    }

    type Core {
        id: String
        serial: String
        block: Int
        status: String
        reuse_count: Int
        rtls_attempts: Int
        rtls_landings: Int
        asds_attempts: Int
        last_update: String
        asds_landings: Int
    }

    type Dragon {
        id: String
        name: String
        type: String
        active: Boolean
        crew_capacity: Int
        orbit_duration_yr: Int
        dry_mass_kg: Int
        dry_mass_lb: Int
        first_flight: String
        heat_shield: HeatShield
        launch_payload_mass: Payload_Mass
        launch_payload_vol: Payload_Vol
        return_payload_mass: Payload_Mass
        return_payload_vol: Payload_Vol
        pressurized_capsule: Pressurized_Capsule
        trunk: Trunk
    }

    type HeatShield {
        material: String
        size_meters: Int
        temp_degrees: Int
        dev_partner: String
    }

    type Payload_Mass {
        kg: Int
        lb: Int
    }

    type Payload_Vol {
        cubic_meter: Int
        cubic_feet: Int
    }

    type Pressurized_Capsule {
        payload_volume: Payload_Vol
    }

    type Trunk {
        trunk_volume: Payload_Vol
        cargo: Cargo
        height_w_trunk: Dimension
        diameter: Dimension
        flickr_images: Flickr_Images
        wikipedia: String
        description: String
    }

    type Cargo {
        solar_array: Int
        unpressurized_cargo: Boolean
    }

    type Dimension {
        meters: Float
        feet: Float
    }

    type Flickr_Images {
        type: [String]
    }

    type Landingpad {
        name: String
        full_name: String
        status: String
        type: String
        locality: String
        region: String
        latitude: Float
        longitude: Float
        landing_attempts: Int
        landing_successes: Int
        wikipedia: String
        details: String
    }

    type Launch {
        id: String
        flight_number: Int
        name: String
        date_utc: String
        date_unix: Int
        date_local: String
        date_precision: String
        static_fire_date_utc: String
        static_fire_date_unix: Int
        tdb: Boolean
        net: Boolean
        window: Int
        success: Boolean
        failures: [Failures]
        upcoming: Boolean
        details: String
        fairings: Fairing
        cores: Cores
        links: Links
        auto_update: Boolean
    }

    type Failures {
        time: Int
        altitude: Int
        reason: String
    }

    type Fairing {
        reused: Boolean
        recovery_attempt: Boolean
        recovered: Boolean
    }

    type Cores {
        flight: Int
        gridfins: Boolean
        legs: Boolean
        reused: Boolean
        landing_attempts: Boolean
        landing_success: Boolean
        landing_type: String
    }

    type Links {
        patch: Patch
        reddit: Reddit
        presskit: String
        webcast: String
        youtube_id: String
        article: String
        wikipedia: String
    }

    type Patch {
        small: String
        large: String
    }

    type Reddit {
        campagin: String
        launch: String
        media: String
        recovery: String
    }

    type Launchpad {
        id: String
        name: String
        full_name: String
        status: String
        locality: String
        region: String
        timezone: String
        latitude: Float
        longitude: Float
        launch_attempts: Int
        launch_successes: Int
    }

    type Payload {
        name: String
        type: String
        id: String
        reused: Boolean
        mass_kg: Int
        mass_lbs: Int
        orbit: String
        reference_system: String
        regime: String
        longitude: Float
        semi_major_axis_km: Float
        eccentricity: Float
        periapsis_km: Float
        apoapsis_km: Int
        inclination_deg: Int
        period_min: Int
        lifespan_years: Int
        epoch: String
        mean_motion: Int
        raan: Int
        arg_of_pericenter: Int
        mean_anomaly: Int
        dragon: Payload_Dragon
        nationalities: [String]
    }
    
    type Payload_Dragon {
        mass_returned_kg: Int
        mass_returned_lbs: Int
        flight_time_sec: Int
        manifest: String
        water_landing: Boolean
        land_landing: Boolean
    }

    type Roadster {
        name: String
        launch_date_utc: String
        launch_date_unix: Int
        launch_mass_kg: Int
        launch_mass_lbs: Int
        norad_id: Int
        epoch_id: Float
        orbit_type: String
        apoapsis_au: Float
        periapsis_au: Float
        semi_major_axis_au: Float
        eccentricity: Float
        incination: Float
        longitude: Float
        periapsis_arg: Float
        period_days: Float
        speed_kph: Float
        speed_mph: Float
        earth_distance_km: Float
        earth_distance_mi: Float
        mars_distance_km: Float
        mars_distance_mi: Float
        flickr_images: [String]
        wikipedia: String
        video: String
        details: String
    }

    type Rocket {
        name: String
        type: String
        active: Boolean
        stages: Int
        boosters: Int
        cost_per_launch: Int
        success_rate_pct: Int
        first_flight: String
        country: String
        company: String
        diameter: Dimension
        mass: Payload_Mass
        first_stage: RocketFirstStage
        second_stage: RocketSecondStage
        engines: Engines
        landing_legs: LandingLegs
        flickr_images: [String]
        wikipedia: String
        description: String
        rocket_id: String
        rocket_name: String
        rocket_type: String
        id: String
    }

    type RocketFirstStage {
        reusable: Boolean
        engines: Int
        fuel_amount_tons: Float
        burn_time_sec: Int
        thrust_sea_level: Thrust
        thrust_vacuum: Thrust
    }

    type RocketSecondStage {
        engines: Int
        fuel_amount_tons: Float
        burn_time_sec: Int
        thrust: Thrust
        payloads: RocketPayload
    }

    type RocketPayload {
        option_1: String
        option_2: String
        composite_fairing: Fairing
    }

    type LandingLegs {
        number: Int
        material: String
    }

    type Engines {
        number: Int
        type: String
        version: String
        layout: String
        engine_loss_max: Int
        propellant_1: String
        propellant_2: String
        thrust_sea_level: Thrust
        thrust_vacuum: Thrust
        thrust_to_weight: Float
    }

    type Thrust {
        kN: Float
        lbf: Float
    }

    type StarLink {
        id: String
        version: String
        longitude: Float
        latitude: Float
        height_km: Int
        velocity_kms: Int
        spaceTrack: SpaceTrack
    }

    type SpaceTrack {
        CCSDS_OMM_VERS: String
        COMMENT: String
        CREATION_DATE: String
        ORIGINATOR: String
        OBJECT_NAME: String
        OBJECT_ID: String
        CENTER_NAME: String
        REF_FRAME: String
        TIME_SYSTEM: String
        MEAN_ELEMENT_THEORY: String
        EPOCH: String
        MEAN_MOTION: Float
        ECCENTRICITY: Float
        INCLINATION: Float
        RA_OF_ASC_NODE: Float
        ARG_OF_PERICENTER: Float
        MEAN_ANOMALY: Float
        EPHEMERIS_TYPE: Int
        CLASSIFICATION_TYPE: String
        NORAD_CAT_ID: Int
        ELEMENT_SET_NO: Int
        REV_AT_EPOCH: Int
        BSTAR: Float
        MEAN_MOTION_DOT: Float
        MEAN_MOTION_DDOT: Float
        SEMIMAJOR_AXIS: Float
        PERIOD: Float
        APOAPSIS: Float
        PERIAPSIS: Float
        OBJECT_TYPE: String
        RCS_SIZE: String
        COUNTRY_CODE: String
        LAUNCH_DATE: String
        SITE: String
        DECAY_DATE: String
        DECAYED: Int
        FILE: Int
        GP_ID: Int
        TLE_LINE0: String
        TLE_LINE1: String
        TLE_LINR2: String
    }

    type Ship {
        name: String
        id: Int
        legacy_id: String
        model: String
        type: String
        active: Boolean
        imo: Int
        mmsi: Int
        abs: Int
        class: Int
        mass_kg: Float
        mass_lbs: Float
        year_built: Int
        home_port: String
        status: String
        speed_kn: Float
        course_deg: Float
        latitude: Float
        longitude: Float
        last_ais_update: String
        link: String
        image: String
    }

    type History {
        id: String
        title: String
        event_date_utc: String
        event_date_unix: Int
        details: String
        links: HistoryLinks
    }

    type HistoryLinks {
        article: String
    }
`;
exports.default = typeDefs;
//# sourceMappingURL=schema.js.map