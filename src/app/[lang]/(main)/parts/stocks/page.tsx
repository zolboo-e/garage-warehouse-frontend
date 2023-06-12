//
import { use } from "react";

//
import { client } from "@/db/client";

import { StocksTable } from "./stocks_table";

const StocksPage: React.Page = () => {
  const { status, body } = use(client.stocks.getStocks());

  if (status !== 200) {
    return <div>{status}</div>;
  }

  return <StocksTable data={body} />;
};
export default StocksPage;
