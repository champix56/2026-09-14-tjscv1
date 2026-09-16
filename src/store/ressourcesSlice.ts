import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { ImageInterface, MemeInterface } from "orsys-tjs-meme";
interface IRessourcesState {
  images: ImageInterface[];
  memes: MemeInterface[];
}
const initialState: IRessourcesState = {
  images: [],
  memes: [],
};

const ressourcesSlice = createSlice({
  name: "ressouces",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(loadRessources.fulfilled, (state, action) => {
      state.images = action.payload.images;
      state.memes = action.payload.memes;
    });
  },
});
export const loadRessources = createAsyncThunk("ressources/load", async () => {
  const prm = fetch("http://localhost:5679/memes");
  const pri = fetch("http://localhost:5679/images");
  const prall = await Promise.all([prm, pri]);
  return { images: await prall[1].json(), memes: await prall[0].json() } as {
    images: Array<ImageInterface>;
    memes: Array<MemeInterface>;
  };
});
//export const {} = ressourcesSlice.actions
const ressourcesReducer = ressourcesSlice.reducer;
export default ressourcesReducer;
