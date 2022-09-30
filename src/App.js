import {BrowserRouter, Route, Routes, Navigate} from "react-router-dom"
import './App.css';
import Landing from './Pages/Landing/Landing';
import Create from "./Pages/Create/Create";
import Event from "./Pages/Event/Event";

function App() {
  return (
    <BrowserRouter>
  
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/create" element={<Create />} />
        <Route path="/event" element={<Event />} />
    
      </Routes>
    
    </BrowserRouter>
  );
}

export default App;
