//
import { use } from "react";

//
import { server } from "@/db/server";

import { StocksTable } from "./stocks_table";

const StocksPage: React.Page = () => {
  const { status, body } = use(server.stocks.getStocks());
  if (status !== 200) {
    return <div>{status}</div>;
  }

  return <StocksTable data={body} />;
};
export default StocksPage;
