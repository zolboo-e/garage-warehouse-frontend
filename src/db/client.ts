import { initClient, tsRestFetchApi } from "@ts-rest/core";

import { appContract } from ".";

export const client = initClient(appContract, {
  baseHeaders: {},
  baseUrl: "http://localhost:3001",
  api: async (args) => {
    const { path, body, headers, method } = args;
    // const response = await fetch(path, { body, headers, method });

    return tsRestFetchApi(args);
  },
});
