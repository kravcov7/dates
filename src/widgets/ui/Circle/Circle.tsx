import React, { useEffect, useRef } from "react";
import styles from "./Circle.module.scss";
import classNames from "classnames";
import { Years } from "../Years/Years";
import { PointsCircle } from "../PointsCircle/PointsCircle";
import openPoint from "@/utils/gsap/openPoint";

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
  const ancestorRef = useRef<HTMLDivElement | null>(null);
  const prevPointNumberRef = useRef<HTMLSpanElement | null>(null);
  const prevPointRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    openPoint({
      point: prevPointRef.current as HTMLDivElement,
      pointNumber: prevPointNumberRef.current as HTMLSpanElement,
      animate: false,
    });
  }, []);

  return (
    <div className={styles.circle}>
      <Years startYear={startYear} endYear={endYear} />

      {pointsCircle.map(
        ({ id, title }) => {
          const deg = 30 * id * 2 - 24;
          return (
            <div
              key={id}
              // ref={prevPointRef}
              style={{ transform: `rotate(${deg}deg)` }}
              className={classNames(styles.numberPeriod, styles.point)}
            >
              <span 
              ref={prevPointNumberRef} 
              className={styles.number}>
                {id}
              </span>
            </div>
            // <PointsCircle key={id} title={title} id={id} />
          );
        }
        // <PointsCircle key={id} title={title} id={id} />
      )}
    </div>
  );
};
