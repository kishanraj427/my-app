import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';

function App() {

  const [mode, setMode] = useState("light");
  const changeCheck = ()=>{
    if(mode === "light"){
      setMode("dark")
      document.body.style.background = "black"
      showAlert("Dark mode has been enabled!!", "success")
    }
    else{
      setMode("light")
      document.body.style.background = "white" 
      showAlert("Light mode has been enabled!!", "success")
    }
  }

  const [alert, setAlert] = useState(null)

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=>{setAlert(null)}, 1500)
  }

  return (
    <div>
    <Navbar title = "React App" mode = {mode} onClick={changeCheck}/>
    <Alert alert = {alert}/>
    <div className="container my-3">
      <TextForm heading = "Enter your text!" mode={mode}/>
    </div>
    </div>
  );
}

export default App;
