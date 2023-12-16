"use client";
import React, { useState } from "react";
import styles from "./History.module.css";
import { Button } from "@/shared/ui/Button/Button";
import { CardsSlider } from "@/features/ui/CardsSlider/CardsSlider";
import data from "@/assets/data";
import { Circle } from "@/widgets/ui/Circle/Circle";
import { Title } from "@/widgets/ui/Title/Title";
import { Pagination } from "@/features/ui/Pagination/Pagination";

function History() {
  const [currentPointIndex, setCurrentPointIndex] = useState<number>(
    data[0].id
  );

  const sliderData = data[currentPointIndex - 1].slidersFacts;

  return (
    <>
      <div className={styles.history}>
        <Title />
        <Circle />
        <Pagination />
        <CardsSlider sliderData={sliderData} />
      </div>
    </>
  );
}

export default History;
