import { FC, useCallback, useLayoutEffect } from "react";
import { shallowEqual } from "react-redux";

import { useAppDispatch, useAppSelector } from "../../app/hooks";
import {
  WINDOW_WIDTH,
  ACTIVE_COLOR,
  SORTED_COLOR,
  DEFAULT_COLOR,
  AUXILIARY_COLOR,
} from "./Array.constants";
import { Bar } from "../bar";

import styles from "./Array.module.css";

export const Array: FC = () => {
  const dispatch = useAppDispatch();

  const array = useAppSelector(({ arraySettings }) => arraySettings.array);

  const { activeElements, auxiliaryElements, sortedElements } = useAppSelector(
    ({ comparison }) => ({
      activeElements: comparison.activeElements,
      auxiliaryElements: comparison.auxiliaryElements,
      sortedElements: comparison.sortedElements,
    }),
    shallowEqual
  );

  const BAR_WIDTH = WINDOW_WIDTH / array.length || 0;

  const createArray = useCallback(
    () => dispatch({ type: "reset" }),
    [dispatch]
  );

  useLayoutEffect(() => {
    createArray();
  }, [createArray]);

  return (
    <div className={styles.array}>
      {array.map((height, index) => {
        const barColor =
          (sortedElements.includes(index) && SORTED_COLOR) ||
          (activeElements.includes(index) && ACTIVE_COLOR) ||
          (auxiliaryElements.includes(index) && AUXILIARY_COLOR) ||
          DEFAULT_COLOR;

        return (
          <Bar key={index} color={barColor} width={BAR_WIDTH} height={height} />
        );
      })}
    </div>
  );
};
