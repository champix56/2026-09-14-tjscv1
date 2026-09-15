import React from "react";
import Button, { PrimaryButton } from "../ui/Button/Button";
import "./App.css";

function App() {
  let counter = 0;
  return (
    <div className="App">
      valeur du counter : {counter}
      <hr />
      <PrimaryButton
        onButtonClick={() => {
          counter--;
          console.log(counter);
        }}
      >
        -1
      </PrimaryButton>
      <Button
        className="danger"
        onButtonClick={() => {
          counter++;
          console.log(counter);
        }}
      >
        +1
      </Button>
    </div>
  );
}

export default App;
