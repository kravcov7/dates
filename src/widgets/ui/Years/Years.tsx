import styles from "./Years.module.scss";

interface YearsProps {
  startYear: number;
  endYear: number;
}

export const Years = ({ startYear, endYear }: YearsProps) => {
  return (
    <div className={styles.dates}>
      <span className={styles.start}>{startYear}</span>
      <span className={styles.end}>{endYear}</span>
    </div>
  );
};
