import { type FC } from 'react';

import { useSelector } from 'react-redux';
import type { RootState } from '../../../store/store';
import {MemeSVGViewer as Msvg} from 'orsys-tjs-meme'
interface MemeSvgViewerProps {basePath:string}
const MemeSvgViewer: FC<MemeSvgViewerProps> = (props) => {
const current = useSelector((s:RootState)=>s.current.meme)
const images = useSelector((s:RootState)=>s.ressources.images)
  return (
 <Msvg meme={current} image={images.find(i=>i.id===current.imageId)} {...props}/>
);}

export default MemeSvgViewer;
