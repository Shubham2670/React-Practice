import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './React Practice/Navbar';
import HomePage from './React Practice/HomePage';
import Contact from './React Practice/Contact';
import About from './React Practice/About';
import { useState } from 'react';
import Fetchs from './React Practice/Apis/Fetchs';
import Fatchasyn from './React Practice/Apis/Fatchasyn';

function App() {
 {/* const [newdata ,setNewdata] = useState([])
console.log(newdata,"ffsfsewe")*/}
  return (
    <div className="App">
  {/*<BrowserRouter>
    <Navbar/>
    <Routes>
    <Route path='/'  element={<HomePage setNewdata={setNewdata}/>}/>
    <Route path='Contact'  element={<Contact  newdata={newdata}/>}/>
    <Route path='About'  element={<About/>}/>
    </Routes>
  </BrowserRouter> */}
  {/* <Fetchs/>*/}
  <Fatchasyn/>
    </div>
  );
}

export default App;
