import body from '../src/utils';

describe('Request body generation', () => {
  const order = 'desc';
  const sort = 'flight_number';

  it('should put in order and sort parameters', () => {
    const actual = body({order, sort});
    expect(actual).toHaveProperty('options.order', order);
    expect(actual).toHaveProperty('options.sort', sort);
  });

  it('should not put in missing order parameter', () => {
    expect(body({sort})).not.toHaveProperty('options.order');
  });

  it('should not put in missing sort parameter', () => {
    expect(body({order})).not.toHaveProperty('options.sort');
  });
});
