import React, {useEffect, useState} from "react";
import Products from "../products/products";
// contains foods available
export default function Foods({keyword}){

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
  
    return(
        <Products products={products}/>
    )
}