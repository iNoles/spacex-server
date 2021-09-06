import {createApp} from '../src/server';

describe('Capsules', () => {
  describe('All Capsules', () => {
    it('should get all capsules', async () => {
      const app = await createApp();
      const res = await app.inject({
        method: 'POST',
        path: '/graphql',
        payload: {
          query: '{ capsules { serial } }',
        },
      });
      const body = JSON.parse(res.body);
      expect(res.statusCode).toBe(200);
      expect(body).toHaveProperty('data.capsules', expect.any(Array));
      expect(body.data.capsules.length).toBeGreaterThanOrEqual(18);
    });
  });

  describe('Single Capsule', () => {
    it('should get a Dragon 2', async () => {
      const app = await createApp();
      const res = await app.inject({
        method: 'POST',
        path: '/graphql',
        payload: {
          query: '{ capsule(id: "5e9e2c5df3591849f93b2673") { type } }',
        },
      });
      const body = JSON.parse(res.body);
      expect(res.statusCode).toBe(200);
      expect(body).toHaveProperty('data.capsule', expect.any(Object));
      expect(body.data.capsule.type).toBe('Dragon 2.0');
    });
  });
});
