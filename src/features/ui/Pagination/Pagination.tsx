import React from "react";
import styles from "./Pagination.module.css";
import { Button } from "@/shared/ui/Button/Button";

export const Pagination = () => {
  return (
    <div className={styles.pagination}>

      <div className={styles.count}>01/06</div>
      <div className={styles.buttons}>
        <Button  />
        <Button direction={true} />
      </div>
    </div>
  );
};
