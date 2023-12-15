// 'use client'

import React, { useRef } from "react";
import styles from "./Circle.module.css";

export const Circle = () => {
  return (
    <div className={styles.circle}>
      <div className={styles.dates}>
        <span className={styles.start}>1956</span>
        <span className={styles.end}>2009</span>
      </div>
    </div>
  );
};
