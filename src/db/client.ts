import "client-only";

import { initClient, tsRestFetchApi } from "@ts-rest/core";

import { backend } from "@/configs/default";

import { appContract } from ".";

export const client = initClient(appContract, {
  baseHeaders: {},
  baseUrl: backend.baseURL,
  api: async (args) => {
    const { path, body, headers, method } = args;
    // const response = await fetch(path, { body, headers, method });

    return tsRestFetchApi(args);
  },
});
