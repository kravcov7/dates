import React from "react";
import styles from "./History.module.css";
import { Button } from "@/shared/ui/Button/Button";
import { CardsSlider } from "@/features/ui/CardsSlider/CardsSlider";

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
        <div className={styles.dates}>1956 2009</div>
        <div className={styles.pagination}>01/06</div>
        <Button />
        <CardsSlider />
        <div className={styles.pagination2}>стрелки</div>
        <div className={styles.cards}>cards</div>
      </div>
    </>
  );
}

export default History;
