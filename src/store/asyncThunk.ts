import { createAsyncThunk } from "@reduxjs/toolkit";
import type { ImageInterface, MemeInterface } from "orsys-tjs-meme";

export const loadAllRessources = createAsyncThunk("current/load", async () => {
  const pri = fetch("http://localhost:5679/images");
  const prm = fetch("http://localhost:5679/memes");
  const prall = await Promise.all([pri, prm]);
  return { images: await prall[0].json(), memes: await prall[1].json(), isLoaded:true } as {
    images: Array<ImageInterface>;
    memes: Array<MemeInterface>;
    isLoaded:boolean
  };
});
export const saveCurrent = createAsyncThunk(
  "current/save",
  async (meme: MemeInterface) => {
    const pr = await fetch(
      `http://localhost:5679/memes${meme.id !== undefined ? "/" + meme.id : ""}`,
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

/*
export const loadUniqueImage = createAsyncThunk("current/loadUnique", async (id) => {
  const pri = await fetch("http://localhost:5679/images/"+id);
  return { image: await pri.json() } as {
    image: ImageInterface;};
});

store.dispatch(loadUniqueImage(5))

builder.addCase(loadUniqueImage.fulfilled,(s,a)=>{
  s.images.push(a.payload.image)
})
*/