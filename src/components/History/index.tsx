"use client";
import React, { useState } from "react";
import styles from "./History.module.css";
import { Button } from "@/shared/ui/Button/Button";
import { CardsSlider } from "@/features/ui/CardsSlider/CardsSlider";
import data from "@/assets/data";

function History() {
  const [currentPointIndex, setCurrentPointIndex] = useState<number>(
    data[0].id
  );

  const sliderData = data[currentPointIndex - 1].slidersFacts;

  return (
    <>
      <div className={styles.history}>
        <h1 className={styles.title}>Исторические даты</h1>
        <div className={styles.dates}>1956 2009</div>
        <div className={styles.pagination}>01/06</div>
        <Button />
        <Button />
        <CardsSlider sliderData={sliderData} />
      </div>
    </>
  );
}

export default History;
