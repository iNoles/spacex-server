import {createApp} from '../src/server';

describe('Payloads', () => {
  describe('All Payloads', () => {
    it('should get all payloads', async () => {
      const app = await createApp();
      const res = await app.inject({
        method: 'POST',
        path: '/graphql',
        payload: {
          query: '{ payloads { id } }',
        },
      });
      const body = JSON.parse(res.body);
      expect(res.statusCode).toBe(200);
      expect(body.data).toHaveProperty('payloads', expect.any(Array));
      expect(body.data.payloads.length).toBeGreaterThanOrEqual(10);
    });
  });

  describe('Single Payload', () => {
    let data;
    let res;

    beforeAll(async () => {
      const app = await createApp();
      res = await app.inject({
        method: 'POST',
        path: '/graphql',
        payload: {
          // eslint-disable-next-line max-len
          query: '{ payload(id: "5eb0e4c6b6c3bb0006eeb21a") { name nationalities } }',
        },
      });
      const body = JSON.parse(res.body);
      data = body.data;
    });

    it('should get a payload', () => {
      expect(res.statusCode).toBe(200);
      expect(data).toHaveProperty('payload', expect.any(Object));
    });

    it('should be ZUMA', () => {
      expect(data.payload).toHaveProperty('name', 'ZUMA');
      expect(data.payload).toHaveProperty('nationalities', ['United States']);
    });
  });
});
