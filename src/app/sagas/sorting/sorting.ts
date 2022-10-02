import { delay, put, select } from "redux-saga/effects";

import { RootState } from "../../../app/store";
import { setArray } from "../../slices/arraySlice";
import {
  reset,
  setSortedElements,
  toggleSort,
} from "../../slices/comparisonSlice";

export function* setParams(params: Record<string, number>) {
  const array: number[] =
    (yield select(({ arraySettings }: RootState) => arraySettings.array)) || [];

  const arrayCopy = [...array];

  for (const index in params) {
    arrayCopy[Number(index)] = params[index];
  }

  yield put(setArray(arrayCopy));
}

export function* setPause(multiplier = 100) {
  const sortingSpeed: number = yield select(
    ({ comparison }: RootState) => comparison.sortingSpeed
  );

  yield delay(multiplier / sortingSpeed);
}

export function* startSorting() {
  yield put(reset());
  yield put(toggleSort(true));
}

export function* afterSuccessSorting() {
  const sortedArrayLength: number = yield select(
    ({ arraySettings }: RootState) => arraySettings.arrayLength
  );

  yield put(reset());

  for (let length = 1; length < sortedArrayLength; length++) {
    yield put(setSortedElements(Array.from(Array(length).keys())));

    yield setPause(1);
  }
}
