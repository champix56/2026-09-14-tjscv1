import MemeSVGViewer from '../ui/MemeSvgViewer/MemeSvgViewer'
import MemeForm from "../functional/MemeForm/MemeForm.stored";
import FlexH1RstGrow from "../layouts/FlexH1rstGrow/FlexH1rstGrow";
import FlexV3rdGRow from "../layouts/FlexV3rdGRow/FlexV3rdGRow";
import Footer from "../ui/Footer/Footer";
import Header from "../ui/Header/Header";
import Navbar from "../ui/Navbar/Navbar";
import { Link } from 'react-router';
function App() {

  return (
    <div className="App">
      <FlexV3rdGRow>
        <Header />
        <Navbar />
        <FlexH1RstGrow>
          <MemeSVGViewer />
          <MemeForm />
        </FlexH1RstGrow>
        <div style={{textAlign:"center"}}>
          <Link to='/'>Home</Link> | <Link to="/editor">Editeur</Link>
        </div>
        <Footer />
      </FlexV3rdGRow>
    </div>
  );
}

export default App;
