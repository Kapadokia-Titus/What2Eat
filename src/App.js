import React, {useState} from "react";
import { Route, Routes } from "react-router-dom";
import "./theme.min.css"
import './App.css';
import "./theme.min.css"
import Home from './components/home';
import Foods from "./components/foods";
import NavBar from "./components/nav/nav";

function App() {

  // handle search
  const [filteredItem, setFilteredProducts] = useState("fast food");

// handle onchange
function handleOnchange(search){

  setFilteredProducts(search.key)

}
  return (
    <>
    <NavBar onSearch={handleOnchange}/>
    <Routes> 
        <Route path="/" element={<Home keyword={filteredItem}/>} />
        <Route path="/foods" element={<Foods />}/>
    </Routes>
    </>
    
    
    
  );
}

export default App;
