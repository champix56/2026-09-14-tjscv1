import FlexH1RstGrow from "../layouts/FlexH1rstGrow/FlexH1rstGrow";
import FlexV3rdGRow from "../layouts/FlexV3rdGRow/FlexV3rdGRow";
import Footer from "../ui/Footer/Footer";
import Header from "../ui/Header/Header";
import Navbar from "../ui/Navbar/Navbar";
import { Link, Route, Routes } from 'react-router';
import Home from '../../pages/Home';
import Editor from '../../pages/Editor';
function App() {
  return (
    <div className="App">
      <FlexV3rdGRow>
        <Header />
        <Navbar />
        <FlexH1RstGrow>
          <Routes>
            <Route path="/" Component={()=><Home name='Alexandre'/>} />
            <Route path="/editor" Component={Editor} />
          </Routes>
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
