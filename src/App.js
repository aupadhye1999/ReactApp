import logo from './logo.svg';
import './App.css';
import Patient from './Components/Patient/Patient';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Index from './Components/Patient/Index';

function App() {
  return (
    <div className="App">
      {/* <Patient/> */}
      <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route path="/Patient" element={<Patient></Patient>}></Route>
        <Route path="/Index" element={<Index></Index>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
