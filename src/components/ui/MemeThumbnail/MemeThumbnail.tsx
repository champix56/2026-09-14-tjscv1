import { type FC } from 'react';
import styles from './MemeThumbnail.module.css';
import { MemeSVGViewer, type ImageInterface, type MemeInterface } from 'orsys-tjs-meme';
import { Link } from 'react-router'

interface MemeThumbnailProps {
  memes:Array<MemeInterface>
  images:Array<ImageInterface>
}

const MemeThumbnail: FC<MemeThumbnailProps> = ({images,memes}) => {
 
  
  return (
  <div className={styles.MemeThumbnail} data-testid="MemeThumbnail">
    {memes.map((m,i)=><div key={'m'+i}>
      <Link to={"/editor/"+m.id}>
        <MemeSVGViewer meme={m} image={images.find(img=>img.id===m.imageId)} basePath=''/><br/>{m.titre}
      </Link>
    </div>)}
  </div>
);}

export default MemeThumbnail;
