import { createSlice } from '@reduxjs/toolkit'
import type { ImageInterface, MemeInterface } from 'orsys-tjs-meme';
import { loadAllRessources } from './asyncThunk';
import { updateCurrent } from './currentSlice';

interface IRessourcesState{
    images:Array<ImageInterface>;
    memes:Array<MemeInterface>
}

const initialState:IRessourcesState = {
    images:[],
    memes:[]
}

const ressourcesSlice = createSlice({
  name: 'ressources',
  initialState,
  reducers: {

  },
  extraReducers(builder) {
      builder.addCase(loadAllRessources.fulfilled,(state,action)=>{
        /*state.images=action.payload.images
        state.memes=action.payload.memes*/
        return action.payload

      })
      /*demo ecoute daction d'autre tranches*/
      builder.addCase(updateCurrent,(s,a:{type:string,payload:MemeInterface})=>{
        console.log('depuis ressources j\'ecoute laction de update current',s,a.payload);
      })
  },

});

export const {} = ressourcesSlice.actions

const ressourcesReducer=ressourcesSlice.reducer
export default ressourcesReducer