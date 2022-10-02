import { all, put, select, takeLatest } from "redux-saga/effects";

import { RootState } from "../../store";
import { createArray } from "../../../utils";
import { setArray } from "../../slices/arraySlice";
import { reset } from "../../slices/comparisonSlice";

function* controlsSagaWorker() {
  const arrayLength: number = yield select(
    ({ arraySettings }: RootState) => arraySettings.arrayLength
  );

  yield all([put(reset()), put(setArray(createArray(arrayLength)))]);
}

export function* controlsSagaWatcher() {
  yield takeLatest("reset", controlsSagaWorker);
}
