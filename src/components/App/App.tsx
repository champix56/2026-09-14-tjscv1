import React from "react";
import Button, { PrimaryButton } from "../ui/Button/Button";
import "./App.css";
/*
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
}*/
class App extends React.Component<any,{counter:number;autreValue:string}>{

  constructor(props:any){
    super(props)
    this.state={counter:0, autreValue:'abc'}
  }

  componentDidMount(): void {}
  componentWillUnmount(): void {}
  componentDidUpdate(prevProps: Readonly<any>, prevState: Readonly<{ counter: number; autreValue: string; }>, snapshot?: any): void {
    console.log('did Update', this.state);
  }
  render(){
    return <div className="App">
      valeur du counter : {this.state.counter}
      <hr />
      <PrimaryButton
        onButtonClick={() => {
          this.setState({counter:this.state.counter-1});
          console.log(this.state.counter);
        }}
      >
        -1
      </PrimaryButton>
      <Button
        className="danger"
        onButtonClick={() => {
                    this.setState({counter:this.state.counter+1});

          console.log(this.state.counter);
        }}
      >
        +1
      </Button>
    </div>
  }
}
export default App;
