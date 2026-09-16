import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import type { ImageInterface, MemeInterface } from "orsys-tjs-meme";
import { saveCurrent } from "./currentSlice";
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
    builder.addCase(saveCurrent.fulfilled,(state,action)=>{
        const pos=state.memes.findIndex(m=>m.id===action.payload.id)
        if(pos===-1){state.memes.push(action.payload)}
        else {state.memes[pos]=action.payload}
    })
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
