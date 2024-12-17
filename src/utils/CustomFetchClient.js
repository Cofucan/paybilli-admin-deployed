
class CustomFetchClient {
  baseUrl
  defaultOptions;
  constructor(baseUrl = "", defaultOptions = {}) {
    this.baseUrl = baseUrl.replace(/\/$/, ""); // Remove trailing slash
    this.defaultOptions = {
      credentials: "include",
      ...defaultOptions,
    };
  }

  async request(method, path, options = {}) {
    const url = `${this.baseUrl}/${path}`;

    if (options.json) {
      options.headers = {
        ...options.headers,
        "Content-Type": "application/json",
      };
      options.body = JSON.stringify(options.json);
    }
    const newOptions = {
      ...this.defaultOptions,
      ...options,
      method,
    };
    return await fetch(url, newOptions);
  }

  // Convenience methods
  get(path, options = {}) {
    return this.request("GET", path, options);
  }

  post(path, options = {}) {
    return this.request("POST", path, options);
  }

  put(path, options = {}) {
    return this.request("PUT", path, options);
  }

  patch(path, options = {}) {
    return this.request("PATCH", path, options);
  }

  delete(path, options = {}) {
    return this.request("DELETE", path, options);
  }
}
export default CustomFetchClient;
