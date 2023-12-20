import styles from "./PointsCircle.module.scss";
import classNames from "classnames";

interface PointsCircleProps {
  id: number;
  title: string;
}

export const PointsCircle = ({ id, title }: PointsCircleProps) => {
  return (
    <div key={id} className={`styles.numberPeriod styles.point${id}`}>
      <span className={styles.number}>{id}</span>
    </div>
  );
};
