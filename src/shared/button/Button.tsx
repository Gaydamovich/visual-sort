import React, { FC } from "react";
import cn from "classnames";

import styles from "./Button.module.css";

interface ButtonProps {
  text: string;
  className?: string;
  onClick: () => void;
}

export const Button: FC<ButtonProps> = ({ text, className, onClick }) => (
  <button className={cn(styles.btn, className)} onClick={onClick}>
    {text}
  </button>
);
