import { configureStore } from "@reduxjs/toolkit";
import currentReducer from "./currentSlice";
import ressourcesReducer from "./ressourcesSlice";
import { loadAllRessources } from "./asyncThunk";


export const store=configureStore({

    reducer:{current:currentReducer, ressources:ressourcesReducer}
})

store.subscribe(()=>{
    console.log(store.getState());
})
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

//setInterval(()=>{},10000)
store.dispatch(loadAllRessources())
/*store.dispatch(updateCurrent({...store.getState().current.meme,titre:'zertyu'}))
store.dispatch(updateCurrent({...store.getState().current.meme,x:123}))*/
//fetch('http://localhost:5679/images').then(r=>r.json()).then(a=>{store.dispatch(addImageList(a))})