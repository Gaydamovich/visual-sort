import { select, put, race, take, takeLatest } from "redux-saga/effects";

import {
  setActiveElements,
  toggleSort,
  setSortedElements,
  reset,
} from "../../slices/comparisonSlice";
import { RootState } from "../../store";
import { startSorting, setParams, setPause } from "./sorting";

const SPEED_MULTIPLIER = 80;

function* bubbleSortHelper() {
  const { array, arrayLength }: { array: number[]; arrayLength: number } =
    yield select(({ arraySettings }: RootState) => ({
      array: [...(arraySettings.array || [])],
      arrayLength: arraySettings.arrayLength,
    }));

  yield startSorting();

  const { success } = yield race({
    success: bubbleSort(array, arrayLength),
    canceled: take(reset),
  });

  if (success) {
    yield put(toggleSort(false));
  }
}

function* bubbleSort(array: number[], arrayLength: number) {
  const completedElements = [];

  for (let step = 0; step < arrayLength; step++) {
    for (
      let compareIndex = 0;
      compareIndex < arrayLength - 1 - step;
      compareIndex++
    ) {
      yield put(setActiveElements([compareIndex, compareIndex + 1]));

      yield setPause(SPEED_MULTIPLIER);

      const left = array[compareIndex];
      const right = array[compareIndex + 1];

      if (left > right) {
        const params = {
          [compareIndex]: right,
          [compareIndex + 1]: left,
        };

        array[compareIndex] = right;
        array[compareIndex + 1] = left;

        yield setParams(params);

        yield setPause(SPEED_MULTIPLIER);
      }
    }

    completedElements.push(arrayLength - 1 - step);

    yield put(setSortedElements([...completedElements]));
  }

  yield put(setSortedElements([0, ...completedElements]));

  return true;
}

export function* bubbleSortWatcher() {
  yield takeLatest("bubbleSort", bubbleSortHelper);
}
