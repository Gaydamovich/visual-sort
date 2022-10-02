import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ArrayState {
  array: number[];
  arrayLength: number;
}

const initialState: ArrayState = {
  array: [],
  arrayLength: 20,
};

const arraySlice = createSlice({
  name: "arraySettings",
  initialState,
  reducers: {
    setArray: (state: ArrayState, action: PayloadAction<number[]>) => {
      state.array = action.payload;
    },
    setLength: (state: ArrayState, action: PayloadAction<number>) => {
      state.arrayLength = action.payload;
    },
  },
});

export const { setArray, setLength } = arraySlice.actions;

export default arraySlice.reducer;
