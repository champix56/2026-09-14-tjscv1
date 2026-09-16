import { createSlice } from "@reduxjs/toolkit";
import { emptyMeme, type MemeInterface } from "orsys-tjs-meme";

const initialState = {
  meme: emptyMeme,
};
interface ICurrentUpdateActionParam {
  type: string;
  payload: MemeInterface;
}
const current = createSlice({
  name: "current",
  initialState,
  reducers: {
    updateCurrent: (state, action: ICurrentUpdateActionParam) => {
      state.meme = action.payload;
    },
    clearCurrent: (state) => {
      state.meme = emptyMeme;
    },
  },
});

export const { updateCurrent, clearCurrent } = current.actions;

const currentReducer = current.reducer;
export default currentReducer;
