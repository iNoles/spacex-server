import {createApp} from '../src/server';

describe('Launchpads', () => {
  describe('All Launchpads', () => {
    it('should get all launchpads', async () => {
      const app = await createApp();
      const res = await app.inject({
        method: 'POST',
        path: '/graphql',
        payload: {
          query: '{ launchpads { name } }',
        },
      });
      const body = JSON.parse(res.body);
      expect(res.statusCode).toBe(200);
      expect(body.data.launchpads.length).toBeGreaterThanOrEqual(4);
    });
  });

  describe('Single Launchpad', () => {
    let res;

    beforeAll(async () => {
      const app = await createApp();
      res = await app.inject({
        method: 'POST',
        path: '/graphql',
        payload: {
          // eslint-disable-next-line max-len
          query: '{ launchpad(id: "5e9e4502f509094188566f88") { name region } }',
        },
      });
    });

    it('should get a launchpad', () => {
      expect(res.statusCode).toBe(200);
      const body = JSON.parse(res.body);
      expect(body.data).toHaveProperty('launchpad', expect.any(Object));
    });

    it('should be pad 39A', () => {
      const body = JSON.parse(res.body);
      expect(body.data.launchpad.name).toEqual('KSC LC 39A');
      expect(body.data.launchpad).toHaveProperty('region', 'Florida');
    });
  });
});
