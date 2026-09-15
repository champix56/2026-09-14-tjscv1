import { useEffect, useState } from "react";
import Button, { PrimaryButton } from "../ui/Button/Button";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0)
  //const [table, setTable] = useState<Array<any>>([])
  //montage uniquement
    useEffect(() => {
    console.log('mount uniquement');
    setCounter(-1000)
    return () => {
      //demontage
    }
  }, [])
  //mount/update sur variable observé
  useEffect(() => {
    console.log('mount/update', counter)
    return () => {
      //demontage
    }
  }, [counter])
  //ts les refresh
  useEffect(() => {
    console.log('ts update')
  })



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
