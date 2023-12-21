import styles from "./PointsCircle.module.scss";
import classNames from "classnames";

interface PointsCircleProps {
  id: number;
  title: string;
}

export const PointsCircle = ({ id, title }: PointsCircleProps) => {

  const deg = 30 * id * 2 - 24
  return (
    <div
      key={id}
      style={{ transform: `rotate(${deg}deg)` }}
      className={classNames(styles.numberPeriod)}
    >
      <span className={styles.number}>{id}</span>
    </div>
  );
};
