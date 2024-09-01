import React, { useState } from "react";

import styles from "./Pagination.module.css";

function Pagination({ page, setPage, changePageHandler }) {
  const previousHandler = () => {
    if (page <= 1) return;
    setPage((page) => page - 1);
  };

  const nextHandler = () => {
    if (page >= 10) return;
    setPage((page) => page + 1);
  };

  const handelClick = (event) => {
    const pageNumber = parseInt(event.target.innerHTML);
    changePageHandler(pageNumber);
  };

  return (
    <>
      <div className={styles.pagination}>
        <button
          onClick={previousHandler}
          className={page === 1 ? styles.disabled : null}
        >
          previous
        </button>
        <p
          className={page === 1 ? styles.selected : null}
          onClick={handelClick}
        >
          1
        </p>
        <p
          className={page === 2 ? styles.selected : null}
          onClick={handelClick}
        >
          2
        </p>
        <span>...</span>
        {page > 2 && page < 9 && (
          <>
            <p className={styles.selected}>{page}</p> <span>...</span>
          </>
        )}
        <p
          className={page === 9 ? styles.selected : null}
          onClick={handelClick}
        >
          9
        </p>
        <p
          className={page === 10 ? styles.selected : null}
          onClick={handelClick}
        >
          10
        </p>
        <button
          onClick={nextHandler}
          className={page === 10 ? styles.disabled : null}
        >
          next
        </button>
      </div>
    </>
  );
}

export default Pagination;
