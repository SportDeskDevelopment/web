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

export const apiInstance = async <T>({
  url,
  method,
  params,
  data,
  headers,
  signal,
}: ApiRequest): Promise<T> => {
  if (process.env.NODE_ENV === "development") {
    // const mockResult = await mock({
    //   url,
    //   method,
    //   params,
    //   data,
    //   headers,
    //   signal,
    // });
    // if (mockResult) {
    //   return mockResult as T;
    // }
  }

  // if (typeof window === "undefined") {
  //   const session = await auth();

  //   if (session) {
  //     headers = {
  //       ...headers,
  //       Session: `${encodeURI(JSON.stringify(session.user))}`,
  //     };
  //   }
  // }

  const token = localStorage.getItem("token");

  if (token) {
    headers = {
      ...headers,
      Authorization: `Bearer ${token}`,
    };
  }

  const response = await fetch(
    `${baseURL}${url}?` + new URLSearchParams(params as Record<string, string>),
    {
      method,
      headers,
      signal,
      ...(data ? { body: JSON.stringify(data) } : {}),
    },
  );

  if (response.status !== 200 && response.status !== 201) {
    return Promise.reject({
      status: response.status,
      data: await response.json(),
    });
  }

  return response.json();
};

export default apiInstance;

export type BodyType<BodyData> = BodyData;
