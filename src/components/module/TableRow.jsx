import React from "react";

import styles from "./TableRow.module.css";

import { marketChart } from "../../services/cryptoApi.js";

function TableRow({ coin, chartDown, chartUp, currency, setChart }) {
  const {
    id,
    image,
    name,
    symbol,
    price_change_percentage_24h: price_change,
    total_volume,
    current_price,
  } = coin;
  const showHandler = async () => {
    try {
      const res = await fetch(marketChart(id));
      const json = await res.json();
      setChart({ ...json, coin: coin });
    } catch (error) {
      setChart(null);
    }
  };
  return (
    <tr>
      <td>
        <div className={styles.symbol} onClick={showHandler}>
          <img src={image} alt={name} />
          <span>{symbol.toUpperCase()}</span>
        </div>
      </td>
      <td>{name}</td>
      <td>
        {currency === "usd" && <span>$ </span>}
        {currency === "eur" && <span>€ </span>}
        {currency === "jpy" && <span>¥ </span>}
        {current_price.toLocaleString()}
      </td>
      <td className={price_change > 0 ? styles.success : styles.error}>
        {price_change.toFixed(2)}%
      </td>
      <td>{total_volume.toLocaleString()}</td>
      <td>
        <img src={price_change >= 0 ? chartUp : chartDown} alt={name} />
      </td>
    </tr>
  );
}

export default TableRow;
