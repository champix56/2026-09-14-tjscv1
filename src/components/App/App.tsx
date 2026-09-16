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
import MemeThumbnail from "../ui/MemeThumbnail/MemeThumbnail.stored";
import { Route, Routes } from "react-router";
import Editor from "../../pages/Editor";
import Thumbnail from "../../pages/Thumbnail";
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
        <Routes>
          <Route path="/editor" Component={Editor}/>
          <Route path="/thumbnail" Component={Thumbnail}/>
        </Routes>
        <Footer />
      </FlexV3rdGRow>
    </div>
  );
}

export default App;
