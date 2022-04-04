import React from 'react';
import './App.css';
import Button from './component/Button/Button';

function App() {
  return (
    <div className="App">
      <Button text="Mon button" bgColor="Grey"/>
      <Button text="Mon button 2"/>
      <Button text="Mon button 3"/>
    </div>
  );
}

export default App;
