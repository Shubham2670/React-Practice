import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './React Practice/Navbar';
import HomePage from './React Practice/HomePage';
import Contact from './React Practice/Contact';
import About from './React Practice/About';
import { useState } from 'react';
import Fetchs from './React Practice/Apis/Fetchs';
import Fatchasyn from './React Practice/Apis/Fatchasyn';
import Axiosmathod from './React Practice/Apis/Axiosmathod';
import AxiosPut from './React Practice/Apis/AxiosPut';
import Imageappend from './React Practice/Apis/Imageappend';
import Formdata from './React Practice/Apis/Formdata';


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
  {/*  <Fatchasyn/>>*/}
{/*  <Axiosmathod/>*/}
{/* <AxiosPut/>*/}
{/*<Imageappend/>*/}
<Formdata/>
    </div>
  );
}

export default App;
