import { emptyMeme, MemeSVGViewer, type ImageInterface } from "orsys-tjs-meme";
import MemeForm from "../functional/MemeForm/MemeForm.stored";
import FlexH1RstGrow from "../layouts/FlexH1rstGrow/FlexH1rstGrow";
import FlexV3rdGRow from "../layouts/FlexV3rdGRow/FlexV3rdGRow";
import Footer from "../ui/Footer/Footer";
import Header from "../ui/Header/Header";
import Navbar from "../ui/Navbar/Navbar";
import {store} from  '../../store/store'
//import "./App.css";
//import { images } from "../../../db.json";
import { useEffect, useState } from "react";
function App() {
  const [current, setCurrent] = useState(emptyMeme);
  const [images, setImages] = useState<Array<ImageInterface>>([])
  useEffect(() => {
    fetch('http://localhost:5679/images').then(r=>r.json()).then(array=>setImages(array))
   
  }, [])
  return (
    <div className="App">
      <FlexV3rdGRow>
        <Header />
        <Navbar />
        <FlexH1RstGrow>
          <MemeSVGViewer image={images.find(e=>e.id===current.imageId)} meme={current} basePath="" />
          <MemeForm
            images={images}
            onMemeSubmit={(newMemeValue) => {
              //enregistrement rest ;
              fetch(`http://localhost:5679/memes${current.id!==undefined?'/'+current.id:''}`,{
                method:current.id!==undefined?'PUT':'POST',
                headers:{
                  "Content-Type":"application/json"
                },
                body:JSON.stringify(current)
              })
            }}
          />
        </FlexH1RstGrow>
        <Footer />
      </FlexV3rdGRow>
    </div>
  );
}

export default App;
