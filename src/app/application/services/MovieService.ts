import {ProductRepository} from '$data/repositories/Product';
import {SearchRequest} from '$domain/http/request/Product/SearchRequest';
import {QueryBuilder} from '$shared/builders/QueryBuilder';
import {BaseService} from '$shared/application/services/BaseService';
import type {ISearchRequest} from '$domain/abstracts/Product';
import type {IPaginationQuery} from '$shared/domain/abstracts/Query/Pagination';
import {SearchResponse} from '$domain/http/response/Product';

export class ProductService extends BaseService {
  private productRepository: ProductRepository;

  constructor() {
    super();
    this.productRepository = new ProductRepository();
  }

  async search(data: Partial<ISearchRequest>, pagination: IPaginationQuery) {
    const request = new SearchRequest(data);
    return await this.productRepository
      .search(QueryBuilder.instance(pagination.page ?? 1, pagination.perPage ?? 10, {'product.vendor_code': request.data.search}))
      .then((response) => new SearchResponse(response))
      .catch(this.handleBackendErrors);
  }

  async findOne(id: number) {
    return await this.productRepository
      .findOne(id)
      .then((response) => response.data)
      .catch(() => {
        throw createError({
          statusCode: 404,
          fatal: true
        });
      });
  }
}
