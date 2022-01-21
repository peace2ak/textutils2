// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';

function App() {
  const [mode, setMode] = useState('light');

  const toggleMode = ()=>{
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#15171a";
      
    }
    else{
      setMode("light");
      document.body.style.backgroundColor = "white";
    }
  }

  return (
    <>
    <Navbar heading='TextUtils' mode={mode} toggle={toggleMode}/>
    <Textform mode={mode} toggle={toggleMode}/>
    </>
  );
}

export default App;
