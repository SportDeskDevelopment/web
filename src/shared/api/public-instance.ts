import { createApi } from "../lib/create-api";

const baseURL = "http://localhost:5001";

export type ApiRequest = {
  url: string;
  method: "GET" | "POST" | "PUT" | "DELETE" | "PATCH";
  params?:
    | string[][]
    | Record<string, string | number>
    | string
    | URLSearchParams;
  data?: BodyType<unknown>;
  signal?: AbortSignal;
  headers?: HeadersInit;
  responseType?: string;
};

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

export type BodyType<BodyData> = BodyData;
