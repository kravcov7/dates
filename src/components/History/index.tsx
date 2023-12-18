"use client";
import React, { useState } from "react";
import styles from "./History.module.css";
import { CardsSlider } from "@/features/ui/CardsSlider/CardsSlider";
import data from "@/assets/data";
import { Circle } from "@/widgets/ui/Circle/Circle";
import { Title } from "@/widgets/ui/Title/Title";
import { Pagination } from "@/features/ui/Pagination/Pagination";

function History() {
  const [currentPointIndex, setCurrentPointIndex] = useState<number>(
    data[0].id
  );

  const [startYear, setStartYear] = useState<number>(data[0].years.start);
  const [endYear, setLastYear] = useState<number>(data[0].years.end);

  const sliderData = data[currentPointIndex - 1].slidersFacts;

  return (
    <>
      <div className={styles.history}>
        <Title />
        <Circle startYear={startYear} endYear={endYear} />
        <Pagination />
        <CardsSlider sliderData={sliderData} />
      </div>
    </>
  );
}

export default History;
