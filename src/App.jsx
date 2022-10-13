import React from 'react'; 
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import AddPegawai from './components/AddPegawai'; 
import ShowPegawai from './components/ShowPegawai'; 
import EditPegawai from './components/EditPegawai'; 
function App() {
  return ( 
    <BrowserRouter>
    <div className="container"> 
      <Routes>
        <Route path = "/" element = {<ShowPegawai />} /> 
        <Route path = "add" element = {<AddPegawai />} /> 
        <Route path = "edit/:id" element = {<EditPegawai />} />
      </Routes>
    </div> 
    </BrowserRouter> 
  );
}

export default App;
