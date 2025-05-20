export type BodyType<BodyData> = BodyData;

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
