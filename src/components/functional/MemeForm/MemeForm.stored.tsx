import MfDisconnected from "./MemeForm";
import { useDispatch, useSelector } from "react-redux";
import { updateCurrent } from "../../../store/currentSlice";
import type { AppDispatch, RootState } from "../../../store/store";
import { saveCurrent } from "../../../store/asyncThunk";
import type { MemeInterface } from "orsys-tjs-meme";
type Props = {};

const MemeForm = (props: Props) => {
  const meme = useSelector((s:RootState) => s.current.meme );
  const images = useSelector((s:RootState) => s.ressources.images);
  const dispatch = useDispatch<AppDispatch>();
  return (
    <MfDisconnected
      {...props}
      images={images}
      meme={meme}
      onMemeSubmit={(newMeme:MemeInterface)=>{
        dispatch(saveCurrent(newMeme))
      }}
      onMemeChange={(newMeme) => {
        dispatch(updateCurrent(newMeme));
      }}
    />
  );
};

export default MemeForm;
