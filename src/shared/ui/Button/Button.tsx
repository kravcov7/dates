import { ButtonHTMLAttributes, FC } from "react";
import styles from "./Button.module.css";
import Arrow from "@/shared/assets/icons/arrow.svg";
import Image from "next/image";
import classNames from "classnames";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  direction?: boolean;
  disabled?: boolean;
}

export const Button: FC<ButtonProps> = (props) => {
  const { children, direction = false } = props;
  return (

    <button
      type="button"
      className={classNames(styles.button, { [styles.next]: direction })}
    >
      <Image src={Arrow} alt="arrow" width={12} height={16} />
      {children}
    </button>
  );
};
