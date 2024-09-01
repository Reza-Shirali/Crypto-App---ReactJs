import React, { useEffect, useState } from "react";
import { RotatingLines } from "react-loader-spinner";

import { searchCoin } from "../../services/cryptoApi";

import styles from "./Search.module.css";

function Search({ currency, setCurrency }) {
  const [text, setText] = useState("");
  const [coins, setCoins] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    setCoins([]);
    if (!text) {
      setIsLoading(false);
      return;
    }

    const search = async () => {
      try {
        const res = await fetch(searchCoin(text), {
          signal: controller.signal,
        });
        const json = await res.json();
        console.log(json);
        if (json.coins) {
          setIsLoading(false);
          setCoins(json.coins);
        } else {
          alert(json.status.error.message);
        }
      } catch (error) {
        if (error.name !== "AbortError") {
          alert(error.message);
        }
      }
    };
    setIsLoading(true);
    search();

    return () => {
      controller.abort();
    };
  }, [text]);
  return (
    <>
      <div className={styles.search__wrapper}>
        <input
          type="text"
          placeholder="Search..."
          value={text}
          onChange={(event) => setText(event.target.value)}
        />
        <select
          value={currency}
          onChange={(event) => setCurrency(event.target.value)}
        >
          <option value="usd">USD</option>
          <option value="eur">EUR</option>
          <option value="jpy">JPY</option>
        </select>
        {(!!coins.length || isLoading) && (
          <div className={styles.search__result}>
            {isLoading && (
              <RotatingLines
                width="5rem"
                height="5rem"
                strokeColor="#3874ff"
                strokeWidth="2"
              />
            )}
            <ul>
              {coins.map((coin) => (
                <li key={coin.id}>
                  <img src={coin.thumb} alt={coin.name} />
                  <p>{coin.name}</p>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
}

export default Search;
