import { defineConfig, Options } from "orval";

const common: Partial<Options["output"]> = {
  mode: "single",
  client: "react-query",
  prettier: true,
  override: {
    mutator: {
      path: "./src/shared/api/instance.ts",
      name: "apiInstance",
    },
    query: {
      useQuery: true,
      useMutation: true,
    },
  },
};

export default defineConfig({
  auth: {
    input: "../contracts/auth.yaml",
    output: {
      target: "./src/shared/api/auth/api.ts",
      schemas: "./src/shared/api/auth/types",
      ...common,
    },
  },
  user: {
    input: "../contracts/user.yaml",
    output: {
      target: "./src/shared/api/user/api.ts",
      schemas: "./src/shared/api/user/types",
      ...common,
    },
  },
});
