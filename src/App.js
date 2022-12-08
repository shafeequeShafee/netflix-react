import './App.css'
import { Routes, Route } from 'react-router-dom'
import Login from './Components/RouterComponents/Login/Login';
import Home from './Components/RouterComponents/Home/Home';

import { BrowserRouter } from 'react-router-dom'
import { useState } from 'react';


function App() {
  const [status,setStatus]=useState(false)
  const getData =(data)=>{
    console.log('data',data)
    setStatus(data)
  }
  return (
    <div className="App">

   
        <BrowserRouter>
          <Routes>
          <Route path='/' element={<Login  homeStatus={getData} />}></Route>
          {
            status==true && <Route path='/home' element={<Home />}></Route>
          }
            
          
            
          </Routes>
        </BrowserRouter>

  


    </div>
  );
}

export default App;
