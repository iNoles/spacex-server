import {createApp} from '../src/server';

describe('Crew', () => {
  describe('All Crew', () => {
    it('should get all crews', async () => {
      const app = await createApp();
      const res = await app.inject({
        method: 'POST',
        path: '/graphql',
        payload: {
          query: '{ crews { name } }',
        },
      });
      const body = JSON.parse(res.body);
      expect(res.statusCode).toBe(200);
      expect(body.data).toHaveProperty('crews', expect.any(Array));
      expect(body.data.crews.length).toBeGreaterThanOrEqual(10);
    });
  });
  describe('Limit Crew', () => {
    it('should limit crew by 4', async () => {
      const app = await createApp();
      const res = await app.inject({
        method: 'POST',
        path: '/graphql',
        payload: {
          query: '{ crews(limit: 4) { name } }',
        },
      });
      const body = JSON.parse(res.body);
      expect(res.statusCode).toBe(200);
      expect(body.data).toHaveProperty('crews', expect.any(Array));
      expect(body.data.crews.length).toEqual(4);
    });
  });
});
describe('Single Crew', () => {
  it('should get Robert Behnken', async () => {
    const app = await createApp();
    const res = await app.inject({
      method: 'POST',
      path: '/graphql',
      payload: {
        // eslint-disable-next-line max-len
        query: '{ crew(id:"5ebf1a6e23a9a60006e03a7a") { name } }',
      },
    });
    const body = JSON.parse(res.body);
    expect(res.statusCode).toBe(200);
    expect(body.data).toHaveProperty('crew', expect.any(Object));
    expect(body.data.crew.name).toEqual('Robert Behnken');
  });
});
