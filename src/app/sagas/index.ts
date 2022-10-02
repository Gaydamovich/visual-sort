import { all } from "redux-saga/effects";

import { controlsSagaWatcher } from "./controls";
import { bubbleSortWatcher } from "./sorting/bubbleSort";

export default function* rootSaga() {
  yield all([controlsSagaWatcher(), bubbleSortWatcher()]);
}
