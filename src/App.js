import './App.css';
import { useState } from 'react';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import Footer from './Components/Footer';
import Alert from './Components/Alert';
import About from'./Components/About';
import {
  BrowserRouter as Router,
  Switch,
  Route

} from "react-router-dom";

function App() {
  const [alert, setAlert] = useState(null)
  const [mode,setMode]=useState("light");
  const showAlert=(message,type)=>
  {
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }
  
  const toggle=()=>{
    if(mode==="dark")
    {
      setMode("light");
      document.body.style.background=('#ffff')
      showAlert("light mode has been enabled","success")
      
      // setInterval(() => {
      //   document.title = "install now";
      // }, 20);
      // setInterval(() => {
      //   document.title = "installs now";
      // }, 20);
    }
    else{
      setMode("dark");
      document.body.style.background=('#212529')
      showAlert("dark mode has been enabled","success")
      // document.title="Text Analyzer Dark Mode"
      // setInterval(()=>{
      //   document.title="install now"
      // },2000)
    }
  }
  return (
    <>
     <Router>
      <Navbar title="TextAnalyze" aboutText="About"  theme={mode} toggle={toggle}/>
      <Alert alert={alert}/>
        <Switch>
          <Route exact path='/About'>
          <div className="container p-5">
              <About showAlert={showAlert} theme={mode}/>
            </div>
          </Route>
          <Route exact path='/'>
          <div className="container p-5">

              <TextForm showAlert={showAlert} heading="Enter the text below" theme={mode}/>
          </div>
          <Footer />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
