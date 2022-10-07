import Hero from "./hero";
import NavBar from "../nav/nav"
import Products from "../products/products";
import React, {useEffect, useState} from 'react';

export default function Home({keyword}){

    const [products, setProducts] = useState([]); 
  // handle search
  const [filteredItem, setFilteredProducts] = useState(keyword);

 

  
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
        
        fetch(`https://edamam-food-and-grocery-database.p.rapidapi.com/parser?ingr=${filteredItem}`, options)
            .then(response => response.json())
            .then(response => setProducts(response.hints))
            .catch(err => console.error(err));
    },[filteredItem])


    // handle onchange
    function handleOnchange(search){

      setFilteredProducts(search.key)

    }

    function handleCardClick(event){
      // some logic

    }

    function handleSearchButtonClick(event){
      event.preventDefault();  // stops reloading
     
      setFilteredProducts(filteredItem)
    }
  return (
    <>
    <Hero query={handleOnchange}  onButtonClick={handleSearchButtonClick}/>
    <Products products={products}/>
    </>
    
  );
}