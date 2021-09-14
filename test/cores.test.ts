import {createApp} from '../src/server';

describe('Cores', () => {
  describe('All Cores', () => {
    it('should get all cores', async () => {
      const app = await createApp();
      const res = await app.inject({
        method: 'POST',
        path: '/graphql',
        payload: {
          query: '{ cores { serial } }',
        },
      });
      const body = JSON.parse(res.body);
      expect(res.statusCode).toBe(200);
      expect(body.data).toHaveProperty('cores', expect.any(Array));
      expect(body.data.cores.length).toBeGreaterThanOrEqual(10);
    });
  });

  describe('Sorting Cores', () => {
    it('should descending cores', async () => {
      const app = await createApp();
      const res = await app.inject({
        method: 'POST',
        path: '/graphql',
        payload: {
          query: '{ cores(sort: "serial" order: desc) { serial } }',
        },
      });
      const body = JSON.parse(res.body);
      expect(res.statusCode).toBe(200);
      expect(body.data).toHaveProperty('cores', expect.any(Array));
      expect(body.data.cores[0]).toHaveProperty('serial', 'Merlin3C');
    });
  });

  describe('Single Core', () => {
    it('should get B1046', async () => {
      const app = await createApp();
      const res = await app.inject({
        method: 'POST',
        path: '/graphql',
        payload: {
          // eslint-disable-next-line max-len
          query: '{ core(id:"5e9e28a5f359182b023b2656") { serial asds_landings } }',
        },
      });
      const body = JSON.parse(res.body);
      expect(res.statusCode).toBe(200);
      expect(body.data).toHaveProperty('core', expect.any(Object));
      const {core} = body.data;
      expect(core).toHaveProperty('serial', 'B1046');
      expect(core.asds_landings).toBeGreaterThanOrEqual(3);
    });
  });
});
