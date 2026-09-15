import { emptyMeme, MemeSVGViewer } from "orsys-tjs-meme";
import MemeForm from "../functional/MemeForm/MemeForm";
import FlexH1RstGrow from "../layouts/FlexH1rstGrow/FlexH1rstGrow";
import FlexV3rdGRow from "../layouts/FlexV3rdGRow/FlexV3rdGRow";
import Footer from "../ui/Footer/Footer";
import Header from "../ui/Header/Header";
import Navbar from "../ui/Navbar/Navbar";
//import "./App.css";
import {images} from '../../../db.json'
function App() {

  return (
    <div className="App">
     <FlexV3rdGRow>
        <Header/>
        <Navbar/>
        <FlexH1RstGrow>
          <MemeSVGViewer image={undefined} meme={emptyMeme} basePath=""/>
          <MemeForm images={images}/>
        </FlexH1RstGrow>
        <Footer/>
      </FlexV3rdGRow>
    </div>
  );
}

export default App;
