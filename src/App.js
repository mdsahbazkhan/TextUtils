
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// import About from './components/About';
import React, { useState } from 'react';
import Alert from './components/Alert';
// import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
   const [mode,setMode]=useState('light');
   const [alert,setAlert]=useState(null);
   const showAlert = (message,type)=>{
     setAlert({
      msg:message,
      type:type
     })
     setTimeout(()=>{
      setAlert(null);   
   },1500)
   }


   const toggleMode= ()=>{
      if(mode ==='light'){
         setMode('dark');
         document.body.style.backgroundColor = '#2e2f5f';
         showAlert("Dark mode has enabled","success");
         // document.title ='TextUtils - Dark Mode';
      }
      else{
         setMode('light');
         document.body.style.backgroundColor = 'white';
         showAlert("Light mode has enabled","success");
         // document.title ='TextUtils - Light Mode'; 
      }
   }
  return (
   <>
   {/* <BrowserRouter> */}
   {/* <Navbar title="TextUtils" aboutText="About Us"/> */}
   {/* <Navbar/> */}
   
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} aboutText="About Us" />
      <Alert alert={alert}/>
<div className="container my-3">

      {/* <Routes> */}
          {/* <Route exact path='/' element= >*/}
          {<TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode}/>} 
          {/* </Route>
          <Route exact path="aboutus" element={<About showAlert={showAlert} toggleMode={toggleMode} mode={mode}/>}>
        </Route> */}
      {/* </Routes> */}
      </div>
    {/* </BrowserRouter> */}
  );


</>
    );
}

export default App;
