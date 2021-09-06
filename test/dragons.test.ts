import {createApp} from '../src/server';

describe('Dragons', () => {
  describe('All Dragons', () => {
    it('should get both Dragons', async () => {
      const app = await createApp();
      const res = await app.inject({
        method: 'POST',
        path: '/graphql',
        payload: {
          query: '{ dragons { id } }',
        },
      });
      const body = JSON.parse(res.body);
      expect(res.statusCode).toBe(200);
      expect(body.data).toHaveProperty('dragons', expect.any(Array));
      expect(body.data.dragons).toHaveLength(2);
    });
  });

  describe('Single Dragon', () => {
    it('should get Dragon 2', async () => {
      const app = await createApp();
      const res = await app.inject({
        method: 'POST',
        path: '/graphql',
        payload: {
          // eslint-disable-next-line max-len
          query: '{ dragon(id: "5e9d058859b1ffd8e2ad5f90") { name type first_flight } }',
        },
      });
      const body = JSON.parse(res.body);
      expect(res.statusCode).toBe(200);
      expect(body.data).toHaveProperty('dragon', expect.any(Object));
      const {dragon} = body.data;
      expect(dragon).toHaveProperty('name', 'Dragon 2');
      expect(dragon).toHaveProperty('type', 'capsule');
      expect(dragon).toHaveProperty('first_flight', '2019-03-02');
    });
  });
});
