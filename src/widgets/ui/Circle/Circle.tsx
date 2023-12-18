import React from "react";
import styles from "./Circle.module.scss";
import classNames from "classnames";

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

      <div className={classNames(styles.numberPeriod, styles.point)}>
        <span className={styles.number}>5</span>
      </div>
    </div>
  );
};
