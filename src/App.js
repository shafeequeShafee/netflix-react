import './App.css'
import { Routes, Route } from 'react-router-dom'
import Login from './Components/RouterComponents/Login/Login';
import Home from './Components/RouterComponents/Home/Home';

import { BrowserRouter } from 'react-router-dom'
const status = false

function App() {
  return (
    <div className="App">

      <Login />
      {status &&
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />}></Route>
          </Routes>
        </BrowserRouter>

      }


    </div>
  );
}

export default App;
