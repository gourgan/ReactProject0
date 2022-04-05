import React, { Component } from "react";
import style from "./App.module.css";
//import Button from "./Components/Button/Button";
import FlexWLayout from "./Components/layouts/FlexWLayout/FlexWLayout";
import MemeForm from "./Components/MemeForm/MemeForm";
import MemeViewer from "./Components/MemeViewer/MemeViewer";

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
       <FlexWLayout>
         <MemeViewer/>
         <MemeForm/>
       </FlexWLayout>
      </div>
    );
  }
}

export default App;
