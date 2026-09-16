import MemeSVGViewer from '../ui/MemeSvgViewer/MemeSvgViewer'
import MemeForm from "../functional/MemeForm/MemeForm.stored";
import FlexH1RstGrow from "../layouts/FlexH1rstGrow/FlexH1rstGrow";
import FlexV3rdGRow from "../layouts/FlexV3rdGRow/FlexV3rdGRow";
import Footer from "../ui/Footer/Footer";
import Header from "../ui/Header/Header";
import Navbar from "../ui/Navbar/Navbar";
function App() {

  return (
    <div className="App">
      <FlexV3rdGRow>
        <Header />
        <Navbar />
        <FlexH1RstGrow>
          <MemeSVGViewer />
          <MemeForm
            onMemeSubmit={(newMemeValue) => {
              //enregistrement rest ;
              /*fetch(`http://localhost:5679/memes${current.id!==undefined?'/'+current.id:''}`,{
                method:current.id!==undefined?'PUT':'POST',
                headers:{
                  "Content-Type":"application/json"
                },
                body:JSON.stringify(current)
              })*/
            }}
          />
        </FlexH1RstGrow>
        <Footer />
      </FlexV3rdGRow>
    </div>
  );
}

export default App;
