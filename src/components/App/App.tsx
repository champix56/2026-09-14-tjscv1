import Button from "../ui/Button/Button";
import "./App.css";

function App() {
  return (
    <div className="App">
      DEMAT BREIZH
      <Button onButtonClick={()=>{
        console.log('coucou')
      }} >
        Text
      </Button>
      <Button className="primary"  onButtonClick={()=>{
        console.log('toto')
      }} >
        <div>div</div>
      </Button>
    </div>
  );
}

export default App;
