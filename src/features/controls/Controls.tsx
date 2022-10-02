import { FC } from "react";

import { ResetButton } from "./reset-button";
import { SortButtons } from "./sort-buttons";

import styles from "./Controls.module.css";

export const Controls: FC = () => {
  return (
    <div className={styles.controls}>
      <div className={styles.controls__buttons}>
        <ResetButton />
        <SortButtons />
      </div>
    </div>
  );
};
