import React, { Component } from "react";
import style from "./App.module.css";
import Button from "./component/Button/Button";

interface I_AppProps {
  AppName?: string;
}

interface I_AppState {
  counter: number;
  oneValue: string;
}

class App extends Component<I_AppProps, I_AppState> {
  constructor(props: I_AppProps) {
    super(props);
    this.state = { counter: 0, oneValue: "Hello" };
  }

  componentDidMount(){
    console.log('%c%s','font-size:24pt;color:green;font-weight:900;text-align:center', '⚠⚠ Le component est monté ⚠⚠');
  }
  componentDidUpdate(oldProps:I_AppProps, oldState:I_AppState){
    
    console.log('%c%s','font-size:24pt;color:red;font-weight:900;text-align:center', '============Updates================');
    console.log('Props => ', oldProps, this.props);
    console.log('States => ', oldState, this.state);
  }
  render(): React.ReactNode {
    return (
      <div className={style.App}>
        Valeur du compteur {this.state.counter}
        <Button
          clickEvent={() => {
            this.setState({ counter: this.state.counter + 1 });
          }}
        >
          {this.state.oneValue}
        </Button>
      </div>
    );
  }
}

export default App;
