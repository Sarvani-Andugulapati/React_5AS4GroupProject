import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Login } from './components/Login';
import "bootstrap/dist/css/bootstrap.min.css"
import Background from './backgroundimg.jpeg';
import { Home } from './components/Home';
import  data  from './data.json';

function App() {
  const [item, setItem] = useState(data);
  return (
    
    <div className="App" style={{backgroundImage: `url(${Background})`, overflow:"scroll"}}>
      <Routes>
        <Route path='/' element={<Login></Login>}></Route>
        <Route path='/Home' element={<Home></Home>}></Route>
      </Routes>
     
    </div>
  );
}

export default App;
