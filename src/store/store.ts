import { configureStore } from "@reduxjs/toolkit";
import currentReducer, { updateCurrent } from "./currentSlice";
import ressourcesReducer from "./ressourcesSlice";

export const store=configureStore({

    reducer:{current:currentReducer}
})

store.subscribe(()=>{
    console.log(store.getState());
})

/*store.dispatch(updateCurrent({...store.getState().current.meme,text:'zertyu'}))
store.dispatch(updateCurrent({...store.getState().current.meme,titre:'zertyu'}))
store.dispatch(updateCurrent({...store.getState().current.meme,x:123}))*/
