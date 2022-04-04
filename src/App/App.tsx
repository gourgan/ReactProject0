import React from "react";
import "./App.css";
import Button from "./component/Button/Button";

function App() {
  return (
    <div className="App">
      <Button
        text="Mon button"
        bgColor="Grey"
        clickEvent={(arg: any) => {
          console.log(arg);
        }}
        type="submit"
        color="red"
      />
      <Button text="Mon button div" type="reset" style={{borderRadius:'3px'}}>
        <div>Hello</div>
      </Button>
      <Button text="Mon button string">simple string</Button>
    </div>
  );
}

export default App;
