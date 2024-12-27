import {$fetch} from 'ofetch';
import type {FetchResponse} from 'ofetch';
import type {NitroFetchOptions} from 'nitropack';
import {appendResponseHeader} from 'h3';
import {useRequestEvent, useRequestHeaders} from '#app';

export type BodyData = BodyInit | Record<string, unknown> | null | undefined;

export interface RequestOptions extends NitroFetchOptions<string> {
  passCookie?: boolean;
}

export class HttpRequest {
  private readonly baseUrl: string;
  private readonly defaultOptions: RequestOptions = {};

  constructor(baseUrl: string = '', defaultOptions: RequestOptions = {}) {
    this.baseUrl = baseUrl;
    this.defaultOptions = defaultOptions;
  }

  private async instance<T = unknown>(url: string, options: RequestOptions) {
    const event = useRequestEvent();
    const passCookie = options.passCookie ?? this.defaultOptions.passCookie ?? true;
    const req: FetchResponse<string | Blob | ArrayBuffer | T | ReadableStream<Uint8Array>> = await $fetch.raw(
      this.baseUrl + url,
      this.prepareOptions(options)
    );
    if (passCookie && event) {
      const cookies = (req.headers.get('set-cookie') || '').split(',');
      for (const cookie of cookies) {
        appendResponseHeader(event, 'set-cookie', cookie);
      }
    }
    return req._data as T;
  }

  private prepareOptions(options: RequestOptions) {
    options = {...this.defaultOptions, ...options};
    options.headers = {...options.headers, ...useRequestHeaders(['cookie'])};
    options.passCookie = undefined;
    return options;
  }

  public async get<T = unknown>(url: string, options?: RequestOptions) {
    return await this.instance<T>(url, {
      ...options,
      method: 'GET'
    });
  }

  public async post<T = unknown>(url: string, data: BodyData, options?: RequestOptions) {
    return await this.instance<T>(url, {
      ...options,
      body: data,
      method: 'POST'
    });
  }

  public async put<T = unknown>(url: string, data: BodyData, options?: RequestOptions) {
    return await this.instance<T>(url, {
      ...options,
      body: data,
      method: 'PUT'
    });
  }

  public async patch<T = unknown>(url: string, data: BodyData, options?: RequestOptions) {
    return await this.instance<T>(url, {
      ...options,
      body: data,
      method: 'PATCH'
    });
  }

  public async delete<T = unknown>(url: string, data: BodyData, options?: RequestOptions) {
    return await this.instance<T>(url, {
      ...options,
      body: data,
      method: 'DELETE'
    });
  }
}
