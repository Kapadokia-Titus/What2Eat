import logo from './logo.svg';
import React, {useEffect, useState} from 'react';
import './App.css';
import NavBar from './components/nav/nav';
import './theme.min.css'
import Home from './components/home';
import Products from './components/products/products';
import Categories from './components/products/categories';

function App() {

  const [products, setProducts] = useState([]); 

    

    //some network inits
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '076c578e13msh53cc4b25ccc9d83p1a03a3jsn2a9b2ba7b53d',
            'X-RapidAPI-Host': 'edamam-food-and-grocery-database.p.rapidapi.com'
        }
    };
    // make requests
    useEffect(()=>{
        
        fetch('https://edamam-food-and-grocery-database.p.rapidapi.com/parser?ingr=apple', options)
            .then(response => response.json())
            .then(response => setProducts(response.hints))
            .catch(err => console.error(err));
    },[])


    // handle onchange
    function handleOnchange(event){
      // some logic
    }

    function handleCardClick(event){
      // some logic
    }

  return (
    <>
    <NavBar/>
    <Home onSearch={handleOnchange} />
    <Products products={products} onChange={handleOnchange} cardClick={handleCardClick}/>
    </>
    
  );
}

export default App;
