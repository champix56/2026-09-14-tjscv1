import Button from "../ui/Button/Button";
import "./App.css";

function App() {
  return (
    <div className="App">
      DEMAT BREIZH
      <form>
      <Button type="submit">
        Text
      </Button>
      <Button type="submit">
        <div>div</div>
      </Button>
      <Button type="submit">
        <div>a</div>
        text
        <div>jh</div>
        <div>a</div>
      </Button>
      </form>
    </div>
  );
}

export default App;
