import type { ImageInterface, MemeInterface } from "orsys-tjs-meme";
import MfDisconnected from "./MemeForm";
import { useDispatch, useSelector } from "react-redux";
import { updateCurrent } from "../../../store/currentSlice";
type Props = {
  images: Array<ImageInterface>;
  onMemeSubmit: (newValue: MemeInterface) => void;
};

const MemeForm = (props: Props) => {
  const meme = useSelector((s) => s.current.meme as MemeInterface);
  const dispatch = useDispatch();
  return (
    <MfDisconnected
      {...props}
      meme={meme}
      onMemeChange={(newMeme) => {
        dispatch(updateCurrent(newMeme));
      }}
    />
  );
};

export default MemeForm;
