type HeaderMethod = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
type FetchRequest = {
  json?: object;
} & RequestInit;

class CustomFetchClient {
  baseUrl: string;
  defaultOptions: RequestInit & { headers: { Authorization?: string } };

  constructor(baseUrl = "", defaultOptions = {}) {
    this.baseUrl = baseUrl.replace(/\/$/, "");
    this.defaultOptions = {
      credentials: "include",
      headers: {},
      ...defaultOptions,
    };
  }

  async request(method: HeaderMethod, path: string, options: FetchRequest = {}) {
    const url = `${this.baseUrl}/${path}`;

    if (options.json) {
      options.headers = {
        ...options.headers,
        ...this.defaultOptions.headers,
        "Content-Type": "application/json",
      };
      options.body = JSON.stringify(options.json);
    }
    const newOptions = {
      ...this.defaultOptions,
      ...options,
      method,
    };
    console.log(newOptions);
    return await fetch(url, newOptions);
  }

  // Convenience methods
  get(path: string, options: FetchRequest = {}) {
    return this.request("GET", path, options);
  }

  post(path: string, options: FetchRequest = {}) {
    return this.request("POST", path, options);
  }

  put(path: string, options: FetchRequest = {}) {
    return this.request("PUT", path, options);
  }

  patch(path: string, options: FetchRequest = {}) {
    return this.request("PATCH", path, options);
  }

  delete(path: string, options: FetchRequest = {}) {
    return this.request("DELETE", path, options);
  }
}

export default CustomFetchClient;
