interface OutputControl {
    limit?: number;
    offset?: number;
    order?: string;
    sort?: string;
  }

const body = ({
  limit, offset, order, sort,
}: OutputControl) => {
  const res: any = {};
  const options: any = res['options'] = {};
  if (limit) options.limit = limit;
  if (offset) options.offset = offset;
  if (order) options.order = order;
  if (sort) options.sort = sort;
  return res;
};

export default body;
