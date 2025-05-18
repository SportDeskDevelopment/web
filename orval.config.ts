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
    input: "../Contracts/auth.yaml",
    output: {
      target: "./src/shared/api/auth/index.ts",
      schemas: "./src/shared/api/auth/types",
      ...common,
    },
  },
});
