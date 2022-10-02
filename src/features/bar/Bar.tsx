import { FC } from "react";

import styles from "./Bar.module.css";

interface BarProps {
  width: number;
  height: number;
  color: string;
}

export const Bar: FC<BarProps> = ({ width, height, color }) => {
  const barStyles = {
    width: `${width}px`,
    height: `${height}px`,
    backgroundColor: color,
  };

  return <div className={styles.bar} style={barStyles} />;
};
