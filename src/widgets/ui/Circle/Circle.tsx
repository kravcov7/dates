import React from "react";
import styles from "./Circle.module.scss";
import classNames from "classnames";
import { Years } from "../Years/Years";
import { PointsCircle } from "../PointsCircle/PointsCircle";

interface PointCircle {
  id: number;
  title: string;
}

interface CircleProps {
  startYear: number;
  endYear: number;
  pointsCircle: PointCircle[];
}

export const Circle = ({ startYear, endYear, pointsCircle }: CircleProps) => {
  return (
    <div className={styles.circle}>
      <Years startYear={startYear} endYear={endYear} />

      {pointsCircle.map(({ id, title }) => (
        <PointsCircle key={id} title={title} id={id} />
      ))}
    </div>
  );
};
