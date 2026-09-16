import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
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
  extraReducers(builder) {
      builder.addCase(saveCurrent.fulfilled,(state,action)=>{
        state.meme=action.payload
      })
  },
});

export const { updateCurrent, clearCurrent } = current.actions;
export const saveCurrent = createAsyncThunk(
  "current/save",
  async (meme: MemeInterface) => {
    const pr = await fetch(
      `http://localhost:5679/memes${meme.id !== undefined ? "/" + current.id : ""}`,
      {
        method: meme.id !== undefined ? "PUT" : "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(meme),
      },
    );
    return (await pr.json()) as MemeInterface;
  },
);

const currentReducer = current.reducer;
export default currentReducer;
