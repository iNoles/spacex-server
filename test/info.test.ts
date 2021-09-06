import {createApp} from '../src/server';

describe('Info', () => {
  it('should get company info', async () => {
    const app = await createApp();
    const res = await app.inject({
      method: 'POST',
      path: '/graphql',
      payload: {
        query: '{ company { name } }',
      },
    });
    const body = JSON.parse(res.body);
    expect(res.statusCode).toBe(200);
    expect(body.data).toHaveProperty('company', expect.any(Object));
    expect(body.data.company.name).toEqual('SpaceX');
  });
});
