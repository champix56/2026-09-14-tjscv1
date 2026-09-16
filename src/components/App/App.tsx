import { emptyMeme, MemeSVGViewer } from "orsys-tjs-meme";
import MemeForm from "../functional/MemeForm/MemeForm";
import FlexH1RstGrow from "../layouts/FlexH1rstGrow/FlexH1rstGrow";
import FlexV3rdGRow from "../layouts/FlexV3rdGRow/FlexV3rdGRow";
import Footer from "../ui/Footer/Footer";
import Header from "../ui/Header/Header";
import Navbar from "../ui/Navbar/Navbar";
//import "./App.css";
import { images } from "../../../db.json";
import { useState } from "react";
function App() {
  const [current, setCurrent] = useState(emptyMeme);
  return (
    <div className="App">
      <FlexV3rdGRow>
        <Header />
        <Navbar />
        <FlexH1RstGrow>
          <MemeSVGViewer image={images.find(e=>e.id===current.imageId)} meme={current} basePath="" />
          <MemeForm
            images={images}
            meme={current}
            onMemeSubmit={(newMemeValue) => {
              //enregistrement rest ;
            }}
            onMemeChange={(newMemeValue) => {
              setCurrent(newMemeValue);
            }}
          />
        </FlexH1RstGrow>
        <Footer />
      </FlexV3rdGRow>
    </div>
  );
}

export default App;
