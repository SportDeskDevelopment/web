import { createApi } from "../lib/create-api";

import type { ApiRequest } from "@/shared/api/types";

const baseURL = "http://localhost:5001";

export const publicApiInstance = async <T>({
  url,
  method,
  // params,
  data,
  headers,
  signal,
}: ApiRequest): Promise<T> => {
  const client = createApi({
    baseUrl: baseURL,
  });

  return client({
    url,
    method,
    // params,
    json: data,
    headers,
    signal,
  });
};
