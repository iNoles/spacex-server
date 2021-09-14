import {createApp} from '../src/server';

describe('Ships', () => {
  describe('All Ships', () => {
    it('should get all ships', async () => {
      const app = await createApp();
      const res = await app.inject({
        method: 'POST',
        path: '/graphql',
        payload: {
          query: '{ ships { id } }',
        },
      });
      const body = JSON.parse(res.body);
      expect(res.statusCode).toBe(200);
      expect(body.data).toHaveProperty('ships', expect.any(Array));
      expect(body.data.ships.length).toBeGreaterThanOrEqual(10);
    });
  });

  describe('Single Ship', () => {
    it('should get OCISLY', async () => {
      const app = await createApp();
      const res = await app.inject({
        method: 'POST',
        path: '/graphql',
        payload: {
          query: '{ ship(id: "5ea6ed30080df4000697c913") { name } }',
        },
      });
      const body = JSON.parse(res.body);
      expect(res.statusCode).toBe(200);
      expect(body.data).toHaveProperty('ship', expect.any(Object));
      // eslint-disable-next-line max-len
      expect(body.data.ship).toHaveProperty('name', 'Of Course I Still Love You');
    });
  });
});
