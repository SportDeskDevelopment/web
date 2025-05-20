import { defineConfig, Options } from "orval";

const publicMutator = {
  path: "./src/shared/api/public-instance.ts",
  name: "publicApiInstance",
};

const privateMutator = {
  path: "./src/shared/api/private-instance.ts",
  name: "privateApiInstance",
};

const common: Partial<Options["output"]> = {
  mode: "single",
  client: "react-query",
  prettier: true,
  override: {
    mutator: privateMutator,
    query: {
      useQuery: true,
      useMutation: true,
    },
  },
};

export default defineConfig({
  publicAuth: {
    input: "../contracts/auth.yaml",
    output: {
      target: "./src/shared/api/public-auth/api.ts",
      schemas: "./src/shared/api/public-auth/types",
      ...common,
      override: {
        ...common.override,
        mutator: publicMutator,
      },
    },
  },
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
