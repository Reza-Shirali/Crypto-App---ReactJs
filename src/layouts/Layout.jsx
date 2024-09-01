import React from "react";
import { FaGithub } from "react-icons/fa";

import styles from "./Layout.module.css";

function Layout({ children }) {
  return (
    <>
      <header className={styles.header}>
        <h1>Reza Shirali | ReactJs Crypto App</h1>
        <a href="https://github.com/Reza-Shirali" target="_blank">
          <FaGithub />
        </a>
      </header>
      {children}
      <footer>
        <p>Developed By Reza with ❤️</p>
      </footer>
    </>
  );
}

export default Layout;
