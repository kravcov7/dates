import { ButtonHTMLAttributes, FC } from "react";
import styles from "./Button.module.css";
import Arrow from "@/shared/assets/icons/arrow.svg";
import Image from "next/image";

export const Button: FC<ButtonHTMLAttributes<HTMLButtonElement>> = (props) => {
  const { children } = props;

  return (
    <button type="button" className={styles.button}>
      {/* <Image src={Arrow} alt="My SVG" width={200} height={200} /> */}
      <Image src={Arrow} alt="arrow" width={12} height={14} />
      {/* <Arrow /> */}
      {children}
    </button>
  );
};
