import React from "react";

import { RotatingLines } from "react-loader-spinner";

import TableRow from "./TableRow";

import styles from "./TableCoin.module.css";

import chartUp from "../../assets/images/chart-up.svg";
import chartDown from "../../assets/images/chart-down.svg";

function TableCoin({ coins, isLoading, currency, setChart }) {
  return (
    <>
      <div className={styles.container}>
        {isLoading ? (
          <RotatingLines strokeColor="#3874ff" strokeWidth="2" />
        ) : (
          <table className={styles.table}>
            <thead>
              <tr>
                <th>Coin</th>
                <th>Name</th>
                <th>Price</th>
                <th>24h</th>
                <th>Total Volume</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {coins.map((coin) => (
                <TableRow
                  coin={coin}
                  key={coin.id}
                  chartDown={chartDown}
                  chartUp={chartUp}
                  currency={currency}
                  setChart={setChart}
                />
              ))}
            </tbody>
          </table>
        )}
      </div>
    </>
  );
}

export default TableCoin;
