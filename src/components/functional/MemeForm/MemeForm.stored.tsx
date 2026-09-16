import MfDisconnected from "./MemeForm";
import { useDispatch, useSelector } from "react-redux";
import { saveCurrent, updateCurrent } from "../../../store/currentSlice";
import type { AppDispatch, RootState } from "../../../store/store";
type Props = {};

const MemeForm = (props: Props) => {
  const meme = useSelector((s: RootState) => s.current.meme);
  const images = useSelector((s: RootState) => s.ressources.images);
  const dispatch = useDispatch<AppDispatch>();
  return (
    <MfDisconnected
      {...props}
      meme={meme}
      images={images}
      onMemeChange={(newMeme) => {
        dispatch(updateCurrent(newMeme));
      }}
      onMemeSubmit={() => {
        dispatch(saveCurrent(meme));
      }}
    />
  );
};

export default MemeForm;
