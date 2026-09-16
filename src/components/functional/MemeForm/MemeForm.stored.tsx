import type { ImageInterface, MemeInterface } from "orsys-tjs-meme";
import MfDisconnected from "./MemeForm";
import { useDispatch, useSelector } from "react-redux";
import { updateCurrent } from "../../../store/currentSlice";
import type { RootState } from "../../../store/store";
type Props = {
  onMemeSubmit: (newValue: MemeInterface) => void;
};

const MemeForm = (props: Props) => {
  const meme = useSelector((s:RootState) => s.current.meme );
  const images = useSelector((s:RootState) => s.ressources.images);
  const dispatch = useDispatch();
  return (
    <MfDisconnected
      {...props}
      images={images}
      meme={meme}
      onMemeChange={(newMeme) => {
        dispatch(updateCurrent(newMeme));
      }}
    />
  );
};

export default MemeForm;
