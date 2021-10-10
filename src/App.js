//import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import Alert from './components/Alert';
import About from './components/About';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light'); //whether dark mode enable or not
  const [alert, setAlert] = useState(null);

  const showAlert=(message, type)=>{
    setAlert({
      msg:message,
    type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 4000);
  }
  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor='#061f4a';
      showAlert("Dark mode Is Enable","success");
      //document.title='TextForm-DarkMode'; if you want change title bar 
    }
    else{
      setMode('light')
      document.body.style.backgroundColor='white';
      showAlert("Light mode Is Enable","success");
      //document.title='TextForm-LightMode';
    }
  }
  return (
    <>
    <Router>
     <Navbar title='pink' mode={mode} toggleMode={toggleMode}/>
     <Alert alert={alert} />
     <div className="container my-3">
     <Switch>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/">
          <TextForm  showAlert={showAlert} heading="Enter your data for analysis" mode={mode}/>
          </Route>
     </Switch>
    
      </div>
    </Router>
    </>
  );
}

export default App;
