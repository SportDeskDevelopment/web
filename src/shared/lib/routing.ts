/* eslint-disable @typescript-eslint/no-explicit-any */

/*
 * Example:
 *
 * const routes = createRoutes({
 *   login: "/login",
 *   register: () => `/register`,
 *   buy: (id: string) => `/buy/${id}`,
 * });
 */

type RouteValue = string | ((...args: any[]) => string);
type RouteConfig = Record<string, RouteValue>;

type InferRouteFunction<T> = T extends (...args: any[]) => string
  ? T
  : T extends string
    ? () => string
    : never;

type RoutesObject<T extends RouteConfig> = {
  [K in keyof T]: InferRouteFunction<T[K]>;
};

/**
 * @description
 * This is a utility function to create routes for the application.
 * It allows you to define routes as functions or as strings.
 * If a route is defined as a function, it will be called with the provided arguments to generate the route string.
 * If a route is defined as a string, it will be used directly.
 */
export function createRoutes<T extends RouteConfig>(
  config: T,
): RoutesObject<T> {
  return Object.entries(config).reduce((acc, [key, value]) => {
    (acc as any)[key] = typeof value === "function" ? value : () => value;
    return acc;
  }, {}) as RoutesObject<T>;
}
