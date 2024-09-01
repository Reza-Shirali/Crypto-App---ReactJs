import React, { useEffect, useState } from "react";

import Pagination from "../module/Pagination.jsx";
import TableCoin from "../module/TableCoin";
import Search from "../module/Search.jsx";
import Chart from "../module/Chart.jsx";

import { getCoinList } from "../../services/cryptoApi";

function HomePage() {
  const [coins, setCoins] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [currency, setCurrency] = useState("usd");
  const [chart, setChart] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      const res = await fetch(getCoinList(page, currency));
      const json = await res.json();
      setCoins(json);
      setIsLoading(false);
    };
    fetchData();
  }, [page, currency]);
  const changePageHandler = (click) => {
    setPage(click);
  };

  return (
    <>
      <Search currency={currency} setCurrency={setCurrency} />
      <TableCoin
        coins={coins}
        isLoading={isLoading}
        currency={currency}
        setChart={setChart}
      />
      <Pagination
        page={page}
        setPage={setPage}
        changePageHandler={changePageHandler}
      />
      {!!chart && <Chart chart={chart} setChart={setChart} />}
    </>
  );
}

export default HomePage;
