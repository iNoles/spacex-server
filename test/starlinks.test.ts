import {createApp} from '../src/server';

describe('Starlink', () => {
  describe('All Starlink', () => {
    it('should get all starlink', async () => {
      const app = await createApp();
      const res = await app.inject({
        method: 'POST',
        path: '/graphql',
        payload: {
          query: '{ starlinks { id } }',
        },
      });
      const body = JSON.parse(res.body);
      expect(res.statusCode).toBe(200);
      expect(body.data).toHaveProperty('starlinks', expect.any(Array));
      expect(body.data.starlinks.length).toBeGreaterThanOrEqual(10);
    });
  });

  describe('Single Starlinks', () => {
    it('should get STARLINK-30', async () => {
      const app = await createApp();
      const res = await app.inject({
        method: 'POST',
        path: '/graphql',
        payload: {
          // eslint-disable-next-line max-len
          query: '{ starlink(id: "5eed770f096e59000698560d") { spaceTrack { OBJECT_NAME } } }',
        },
      });
      const body = JSON.parse(res.body);
      expect(res.statusCode).toBe(200);
      expect(body.data).toHaveProperty('starlink', expect.any(Object));
      // eslint-disable-next-line max-len
      expect(body.data.starlink).toHaveProperty('spaceTrack.OBJECT_NAME', 'STARLINK-30');
    });
  });
});
