import React, {useState} from "react";
import "./App.css";
import Button from "./component/Button/Button";

function App() {
  const  [nbClick, setNbClick] = useState(0);

  return (
    <div className="App">
      Hello : {nbClick}
      <Button
        text="Mon button"
        bgColor="Grey"
        clickEvent={(arg: any) => {
          setNbClick(nbClick + 1);
          console.log(nbClick);
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
