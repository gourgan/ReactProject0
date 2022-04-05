import React, { Component } from "react";
import style from "./App.module.css";
//import Button from "./Components/Button/Button";
import FlexWLayout from "./Components/layouts/FlexWLayout/FlexWLayout";
import MemeForm from "./Components/MemeForm/MemeForm";
import MemeViewer from "./Components/MemeViewer/MemeViewer";
import { I_Meme, DummyMeme as initialMeme, I_Image } from "./interfaces/meme";

interface I_AppProps {
  AppName?: string;
}

interface I_AppState {
  counter: number;
  oneValue: string;
  currentMeme: I_Meme;
  images: Array<I_Image>;
}

class App extends Component<I_AppProps, I_AppState> {
  constructor(props: I_AppProps) {
    super(props);
    this.state = {
      counter: 0,
      oneValue: "Hello",
      currentMeme: initialMeme,
      images: [
        {
          id: 0,
          url: "imgTest.jpg",
          w: 1200,
          h: 675,
          name: "test",
        },
      ],
    };
  }

  componentDidMount() {
    console.log(
      "%c%s",
      "font-size:24pt;color:green;font-weight:900;text-align:center",
      "⚠⚠ Le component est monté ⚠⚠"
    );
  }
  componentDidUpdate(oldProps: I_AppProps, oldState: I_AppState) {
    console.log(
      "%c%s",
      "font-size:24pt;color:red;font-weight:900;text-align:center",
      "============Updates================"
    );
    console.log("Props => ", oldProps, this.props);
    console.log("States => ", oldState, this.state);
  }
  render(): React.ReactNode {
    return (
      <div className={style.App}>
        <FlexWLayout>
          <div>
            <MemeViewer meme={this.state.currentMeme} image={this.state.images.find(e=>e.id === this.state.currentMeme.imageId)} />
          </div>
          <MemeForm />
        </FlexWLayout>
      </div>
    );
  }
}

export default App;
