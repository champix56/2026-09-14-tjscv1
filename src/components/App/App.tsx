import React, { useState } from "react";
import Button, { PrimaryButton } from "../ui/Button/Button";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0)
  //const [table, setTable] = useState<Array<any>>([])
  return (
    <div className="App">
      valeur du counter : {counter}
      <hr />
      <PrimaryButton
        onButtonClick={() => {
          setCounter(counter-1);
          console.log(counter);
        }}
      >
        -1
      </PrimaryButton>
      <Button
        className="danger"
        onButtonClick={() => {
          setCounter(counter+1);
          console.log(counter);
        }}
      >
        +1
      </Button>
    </div>
  );
}

export default App;
