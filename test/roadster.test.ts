import {createApp} from '../src/server';

describe('Roadster', () => {
  it('should get Roadster data', async () => {
    const app = await createApp();
    const res = await app.inject({
      method: 'POST',
      path: '/graphql',
      payload: {
        query: '{ roadster { name } }',
      },
    });
    const body = JSON.parse(res.body);
    expect(res.statusCode).toBe(200);
    expect(body.data).toHaveProperty('roadster', expect.any(Object));
    // eslint-disable-next-line max-len
    expect(body.data.roadster).toHaveProperty('name', 'Elon Musk\'s Tesla Roadster');
  });
});
