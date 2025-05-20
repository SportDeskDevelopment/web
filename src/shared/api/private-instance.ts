import { createApi } from "../lib/create-api";

import { appSessionStore } from "@/kernel/session";
import { publicApiInstance } from "@/shared/api/public-instance";

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

let refreshPromise: Promise<string | null> | null = null;

const getRefreshToken = () => {
  refreshPromise =
    refreshPromise ??
    publicApiInstance<{ token: string }>({
      url: "/refresh",
      method: "POST",
    })
      .then((result) => {
        appSessionStore.setSessionToken(result.token);
        return result.token;
      })
      .catch(() => {
        appSessionStore.removeSession();
        return null;
      })
      .finally(() => {
        refreshPromise = null;
      });

  return refreshPromise;
};

export const privateApiInstance = async <T>({
  url,
  method,
  // params,
  data,
  headers,
  signal,
}: ApiRequest): Promise<T> => {
  const client = createApi({
    baseUrl: baseURL,
    requestMiddlewares: [
      async (config) => {
        let token = appSessionStore.getSessionToken();

        if (!token || appSessionStore.isSessionExpired()) {
          token = await getRefreshToken();
        }

        if (token) {
          config.headers = {
            ...config.headers,
            Authorization: `Bearer ${token}`,
          };
        }
        return config;
      },
    ],
    responseMiddlewares: [
      async (response, config) => {
        console.log("response", response);
        if (response.status === 401) {
          const token = appSessionStore.getSessionToken();

          if (token) {
            const newToken = await getRefreshToken();
            if (newToken) {
              config.headers = {
                ...config.headers,
                Authorization: `Bearer ${newToken}`,
              };
              // TODO поправить багу)
              return fetch(`${config.url}`, config);
            }
          }
          appSessionStore.removeSession();
        }
        return response;
      },
    ],
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
