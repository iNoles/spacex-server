import {createApp} from '../src/server';

describe('History', () => {
  it('should get all historical events', async () => {
    const app = await createApp();
    const res = await app.inject({
      method: 'POST',
      path: '/graphql',
      payload: {
        query: '{ histories { details } }',
      },
    });
    const body = JSON.parse(res.body);
    expect(res.statusCode).toBe(200);
    expect(body.data.histories.length).toBeGreaterThanOrEqual(10);
  });

  it('should get historical events 2-4', async () => {
    const app = await createApp();
    const res = await app.inject({
      method: 'POST',
      path: '/graphql',
      payload: {
        query: '{ histories(limit: 3, offset: 1) { id } }',
      },
    });
    const body = JSON.parse(res.body);
    expect(res.statusCode).toBe(200);
    const history = body.data.histories;
    expect(history).toHaveLength(3);
    expect(history[0]).toHaveProperty('id', expect.any(String));
    expect(history[1]).toHaveProperty('id', expect.any(String));
    expect(history[2]).toHaveProperty('id', expect.any(String));
  });

  it('should get one historical event', async () => {
    const app = await createApp();
    const res = await app.inject({
      method: 'POST',
      path: '/graphql',
      payload: {
        query: '{ history(id: "5f6fb2cfdcfdf403df37971e") { details } }',
      },
    });
    const body = JSON.parse(res.body);
    expect(res.statusCode).toBe(200);
    expect(body.data.history).toHaveProperty('details', expect.any(String));
  });
});
