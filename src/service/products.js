import BaseService from './baseService';
import API from '../config/rest';

const products = (limit, offset, search) => {
  return BaseService.get(API.PRODUCTS, {
    params: {
      limit,
      offset,
      search,
    },
  });
};

export default { products };
