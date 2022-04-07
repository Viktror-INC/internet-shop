import React, { ReactChild } from "react";
import styles from "./MainWrap.module.scss";

const MainWrap: React.FC = ({ children }) => {
  return (
    <main className={styles.mainWrap}>
      <div className={styles.container}>
        <div className={styles.main}>{children}</div>
      </div>
    </main>
  );
};

export default MainWrap;
