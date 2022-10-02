import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ComparisonState {
  inProgress: boolean;
  sortingSpeed: number;
  activeElements: number[];
  sortedElements: number[];
  auxiliaryElements: number[];
}

const initialState: ComparisonState = {
  inProgress: false,
  sortingSpeed: 1,
  activeElements: [],
  sortedElements: [],
  auxiliaryElements: [],
};

const comparisonSlice = createSlice({
  name: "comparison",
  initialState,
  reducers: {
    reset: (state: ComparisonState) => ({
      ...initialState,
      sortingSpeed: state.sortingSpeed,
    }),
    toggleSort: (
      state: ComparisonState,
      { payload }: PayloadAction<boolean>
    ) => {
      state.inProgress = payload;
    },
    setSpeed: (state: ComparisonState, { payload }: PayloadAction<number>) => {
      state.sortingSpeed = payload;
    },
    setActiveElements: (
      state: ComparisonState,
      { payload }: PayloadAction<number[]>
    ) => {
      state.activeElements = payload;
    },
    setAuxiliaryElements: (
      state: ComparisonState,
      { payload }: PayloadAction<number[]>
    ) => {
      state.auxiliaryElements = payload;
    },
    setSortedElements: (
      state: ComparisonState,
      { payload }: PayloadAction<number[]>
    ) => {
      state.sortedElements = payload;
    },
  },
});

export const {
  reset,
  toggleSort,
  setActiveElements,
  setAuxiliaryElements,
  setSortedElements,
  setSpeed,
} = comparisonSlice.actions;

export default comparisonSlice.reducer;
