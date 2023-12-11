import React from "react";
import styles from "./History.module.css";

type Data = {
  id: number;
}[];

interface HistoricalDatesProps {
  data: Data;
}

function History({ data }: HistoricalDatesProps) {
  return (
    <>
      <div className={styles.history}>
        <h1 className={styles.title}>Исторические даты</h1>
      </div>
    </>
  );
}

export default History;
