import { useCallback } from "react";
import { Button } from "../../../shared/button";
import { useAppDispatch } from "../../../app/hooks";

import styles from "./SortButtons.module.css";

export const SortButtons = () => {
  const dispatch = useAppDispatch();

  const onBubbleSort = useCallback(() => dispatch({ type: "bubbleSort" }), [dispatch]);

  return (
    <div className={styles.buttons}>
      <Button text="Sort Bubble" onClick={onBubbleSort} />
    </div>
  );
};
