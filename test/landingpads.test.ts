import {createApp} from '../src/server';

describe('Landingpads', () => {
  describe('All Landingpads', () => {
    it('should get all landingpads', async () => {
      const app = await createApp();
      const res = await app.inject({
        method: 'POST',
        path: '/graphql',
        payload: {
          query: '{ landingpads { full_name } }',
        },
      });
      const body = JSON.parse(res.body);
      expect(res.statusCode).toBe(200);
      expect(body.data.landingpads.length).toBeGreaterThanOrEqual(7);
    });
  });

  describe('Single Landingpad', () => {
    let res;

    beforeAll(async () => {
      const app = await createApp();
      res = await app.inject({
        method: 'POST',
        path: '/graphql',
        payload: {
          // eslint-disable-next-line max-len
          query: '{ landingpad(id: "5e9e3032383ecb267a34e7c7") { full_name region } }',
        },
      });
    });

    it('should get a landingpad', () => {
      expect(res.statusCode).toBe(200);
      const body = JSON.parse(res.body);
      expect(body.data).toHaveProperty('landingpad', expect.any(Object));
    });

    it('should be LZ-1', () => {
      const body = JSON.parse(res.body);
      expect(body.data.landingpad.full_name).toEqual('Landing Zone 1');
      expect(body.data.landingpad).toHaveProperty('region', 'Florida');
    });
  });
});
