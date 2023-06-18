//
import { use } from "react";

//
import { server } from "@/db/server";

const StockDetailsPage: React.Page<{ sid: string }> = ({ params }) => {
  const { status, body } = use(server.stocks.getStocks());

  if (status !== 200) {
    return <div>{status}</div>;
  }

  return <div>{`StockDetailsPage ${params.sid}`}</div>;
};
export default StockDetailsPage;
