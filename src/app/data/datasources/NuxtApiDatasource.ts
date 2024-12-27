import {HttpRequest} from '$shared/utils/HttpService';

export class NuxtApiDatasource {
  private readonly config = useRuntimeConfig();
  protected readonly httpClient: HttpRequest;

  constructor() {
    this.httpClient = new HttpRequest(this.config.public.frontUrl, {});
  }
}
