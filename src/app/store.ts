import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";

import arrayReducer from "./slices/arraySlice";
import comparisonReducer from "./slices/comparisonSlice";
import sagas from "./sagas";

export const configureAdminStore = (preloadedState = {}) => {
  const sagaMiddleware = createSagaMiddleware();

  const middlewares = [sagaMiddleware];

  const store = configureStore({
    preloadedState,
    reducer: {
      arraySettings: arrayReducer,
      comparison: comparisonReducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(middlewares),
    devTools: true,
  });

  sagaMiddleware.run(sagas);

  return store;
};

export type Store = ReturnType<typeof configureAdminStore>;
export type AppDispatch = Store["dispatch"];
export type RootState = ReturnType<Store["getState"]>;
