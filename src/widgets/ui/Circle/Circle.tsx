import React from "react";
import styles from "./Circle.module.css";

interface CircleProps {
  startYear: number;
  endYear: number;
}

export const Circle = ({ startYear, endYear }: CircleProps) => {
  return (
    <div className={styles.circle}>
      <div className={styles.dates}>
        <span className={styles.start}>{startYear}</span>
        <span className={styles.end}>{endYear}</span>
      </div>

      <div className={styles.numberPeriod}>
        <span className={styles.number}></span>
      </div>
    </div>
  );
};
