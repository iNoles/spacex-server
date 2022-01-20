import {createApp} from '../src/server';

describe('Launches', () => {
  let launches;
  let res;

  describe('All Launches', () => {
    beforeAll(async () => {
      const app = await createApp();
      res = await app.inject({
        method: 'POST',
        path: '/graphql',
        payload: {
          query: '{ launches { flight_number } }',
        },
      });
      const body = JSON.parse(res.body);
      launches = body.data.launches;
    });

    it('should get all launches', () => {
      expect(res.statusCode).toBe(200);
      expect(launches.length).toBeGreaterThanOrEqual(91);
    });
  });

  describe('Limit Three Launches', () => {
    beforeAll(async () => {
      const app = await createApp();
      res = await app.inject({
        method: 'POST',
        path: '/graphql',
        payload: {
          query: '{ launches(limit: 3) { flight_number } }',
        },
      });
      const body = JSON.parse(res.body);
      launches = body.data.launches;
    });

    it('should get 3 launches', () => {
      expect(res.statusCode).toBe(200);
      expect(launches.length).toEqual(3);
    });
  });

  describe('Specific Launches', () => {
    beforeAll(async () => {
      const app = await createApp();
      res = await app.inject({
        method: 'POST',
        path: '/graphql',
        payload: {
          // eslint-disable-next-line max-len
          query: '{ launches(ids: ["5eb87cd9ffd86e000604b32a", "5eb87cdaffd86e000604b32b"]) { flight_number } }',
        },
      });
      const body = JSON.parse(res.body);
      launches = body.data.launches;
    });

    it('should get two launches', () => {
      expect(res.statusCode).toBe(200);
      expect(launches).toHaveLength(2);
    });
  });

  describe('Single Launch', () => {
    let launch;

    beforeAll(async () => {
      const app = await createApp();
      res = await app.inject({
        method: 'POST',
        path: '/graphql',
        payload: {
          // eslint-disable-next-line max-len
          query: '{ launch(id: "5eb87cd9ffd86e000604b32a") { flight_number name } }',
        },
      });
      const body = JSON.parse(res.body);
      launch = body.data.launch;
    });

    it('should be FalconSat test flight', () => {
      expect(res.statusCode).toBe(200);
      expect(launch.flight_number).toBe(1);
      expect(launch.name).toBe('FalconSat');
    });

    it('should only have requested fields', () => {
      expect(launch).toEqual({
        flight_number: expect.any(Number),
        name: expect.any(String),
      });
    });
  });

  describe('Next Launch', () => {
    beforeAll(async () => {
      const app = await createApp();
      res = await app.inject({
        method: 'POST',
        path: '/graphql',
        payload: {
          query: '{ launches(range: next) { success upcoming } }',
        },
      });
      const body = JSON.parse(res.body);
      launches = body.data.launches;
    });

    it('should get one launch', () => {
      expect(launches).toHaveLength(1);
    });

    it('should be in the future', () => {
      expect(launches[0].upcoming).toBe(true);
    });

    /* it('should have null launch success', () => {
      expect(launches[0].success).toBeNull();
    });*/
  });

  describe('Last Launch', () => {
    beforeAll(async () => {
      const app = await createApp();
      res = await app.inject({
        method: 'POST',
        path: '/graphql',
        payload: {
          // eslint-disable-next-line max-len
          query: '{ launches(range: latest) { date_unix success upcoming } }',
        },
      });
      const body = JSON.parse(res.body);
      launches = body.data.launches;
    });

    it('should get one launch', () => {
      expect(launches).toHaveLength(1);
    });

    it('should be in the past', () => {
      expect(launches[0].upcoming).toBe(false);
      expect(launches[0].date_unix).toBeLessThan(Date.now());
    });
  });
});
