import "server-only";

import { initClient, tsRestFetchApi } from "@ts-rest/core";
import { cookies } from "next/headers";

import { backend } from "@/configs/default";

import { appContract } from ".";

export const server = initClient(appContract, {
  baseHeaders: {},
  baseUrl: backend.baseURL,
  api: async (args) => {
    const cookieStore = cookies();
    const locale = cookieStore.get("locale");
    if (locale) {
      args.headers["x-locale"] = locale.value;
    }

    return tsRestFetchApi(args);
  },
});
