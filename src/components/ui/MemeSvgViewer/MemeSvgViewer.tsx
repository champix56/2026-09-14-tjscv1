import { type FC } from "react";
import {
  MemeSVGViewer as Msvg,
  type ImageInterface,
} from "orsys-tjs-meme";
import { useSelector } from "react-redux";
import type { RootState } from "../../../store/store";
interface MemeSvgViewerProps {
}

const MemeSvgViewer: FC<MemeSvgViewerProps> = () => {
  const meme = useSelector((s: RootState) => s.current.meme);
  const images = useSelector((s: RootState) => s.ressources.images);
  return (
    <Msvg
      basePath=""
      meme={meme}
      image={images.find((img) => img.id === meme.imageId)}
    />
  );
};

export default MemeSvgViewer;
