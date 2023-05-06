import axios, { AxiosRequestConfig } from "axios";

interface ApiOptions extends AxiosRequestConfig {
  headers?: Record<string, string>;
}

const defaultOptions: ApiOptions = {
  baseURL: process.env.REACT_APP_TEST_URL,
  headers: {
    Accept: "application/json",
  },
};

const api = axios.create(defaultOptions);

export function configureApi(options: ApiOptions) {
  api.defaults.headers = {
    ...api.defaults.headers,
    ...(options.headers ?? {}),
  };
}

export default api;
