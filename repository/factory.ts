import { type $Fetch, type FetchOptions } from "ofetch";

class HttpFactory {
  private $fetch: $Fetch;

  constructor(fetcher: $Fetch) {
    this.$fetch = fetcher;
  }

  /**
   * method - GET, POST, PUT
   * URL
   **/

  async fetch<T>(url: string, options: FetchOptions<"json">): Promise<T> {
    const $res: T = await this.$fetch(url, options);
    return $res;
  }

  async get<T>(
    url: string,
    params: object,
    options?: FetchOptions<"json">
  ): Promise<T> {
    const $res: T = await this.fetch<T>(url, {
      method: "GET",
      params,
      ...options,
    });
    return $res;
  }

  async post<T>(
    url: string,
    body: object,
    options?: FetchOptions<"json">
  ): Promise<T> {
    const $res: T = await this.fetch<T>(url, {
      method: "POST",
      body,
      ...options,
    });
    return $res;
  }
}

export default HttpFactory;
