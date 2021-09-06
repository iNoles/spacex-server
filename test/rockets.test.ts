import {createApp} from '../src/server';

describe('Rockets', () => {
  describe('All Rockets', () => {
    it('should get all rockets', async () => {
      const app = await createApp();
      const res = await app.inject({
        method: 'POST',
        path: '/graphql',
        payload: {
          query: '{ rockets { rocket_name } }',
        },
      });
      const body = JSON.parse(res.body);
      expect(body.data).toHaveProperty('rockets', expect.any(Array));
      expect(body.data.rockets.length).toBeGreaterThanOrEqual(4);
    });
  });

  describe('Single Rocket', () => {
    it('should get Falcon Heavy', async () => {
      const app = await createApp();
      const res = await app.inject({
        method: 'POST',
        path: '/graphql',
        payload: {
          // eslint-disable-next-line max-len
          query: '{ rocket(id: "5e9d0d95eda69974db09d1ed") { name boosters stages } }',
        },
      });
      const body = JSON.parse(res.body);
      expect(res.statusCode).toBe(200);
      expect(body.data).toHaveProperty('rocket', expect.any(Object));
      const {rocket} = body.data;
      expect(rocket).toHaveProperty('name', 'Falcon Heavy');
      expect(rocket).toHaveProperty('boosters', 2);
      expect(rocket).toHaveProperty('stages', 2);
    });
  });
});
