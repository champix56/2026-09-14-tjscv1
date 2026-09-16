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
