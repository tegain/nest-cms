/**
 * @class HttpService
 * App HTTP abstraction service
 */
class BaseHttpService {
  constructor (private readonly baseUrl: string) {}

  private get headers (): Headers {
    return new Headers({
      'Content-Type': 'application/json',
    });
  }

  async get (resource: string, params?: object): Promise<any> {
    try {
      const response = await fetch(this.baseUrl + resource, {
        ...params,
        headers: this.headers,
      });

      if (!response.ok) {
        throw Error(`[HTTP Error] [${response.status}] - ${response.statusText}`);
      }

      return response.json();
    } catch (e) {
      throw Error(`[HTTP Error] ${e.message}`);
    }
  }

  async post (resource: string, params?: object): Promise<any> {
    try {
      const response = await fetch(this.baseUrl + resource, {
        ...params,
        headers: this.headers,
        method: 'POST',
      });

      if (!response.ok) {
        throw Error(`[HTTP Error] [${response.status}] - ${response.statusText}`);
      }

      return response.json();
    } catch (e) {
      throw Error(`[HTTP Error] ${e.message}`);
    }
  }

  async patch (resource: string, params?: object): Promise<any> {
    try {
      const response = await fetch(this.baseUrl + resource, {
        ...params,
        headers: this.headers,
        method: 'PATCH',
      });

      if (!response.ok) {
        throw Error(`[HTTP Error] [${response.status}] - ${response.statusText}`);
      }

      return response.json();
    } catch (e) {
      throw Error(`[HTTP Error] ${e.message}`);
    }
  }

  async delete (resource: string): Promise<any> {
    try {
      const response = await fetch(this.baseUrl + resource, {
        headers: this.headers,
        method: 'DELETE',
      });

      if (!response.ok) {
        throw Error(`[HTTP Error] [${response.status}] - ${response.statusText}`);
      }

      return response.json();
    } catch (e) {
      throw Error(`[HTTP Error] ${e.message}`);
    }
  }
}

export const HttpService: BaseHttpService = new BaseHttpService(process.env.VUE_APP_BASE_API_URL);


