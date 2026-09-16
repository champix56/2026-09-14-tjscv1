import { configureStore } from "@reduxjs/toolkit";
import currentReducer from "./currentSlice";
import ressourcesReducer, { loadRessources } from "./ressourcesSlice";

export const store=configureStore({

    reducer:{current:currentReducer, ressources:ressourcesReducer}
})

store.subscribe(()=>{
    console.log(store.getState());
})

store.dispatch(loadRessources())

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
