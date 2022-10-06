import Card from "./productCard";
import React, {useState, useEffect} from "react";

export default function Products(){

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

    return(
        <section className="py-4 overflow-hidden">

        <div className="container">
          <div className="row h-100">
            <div className="col-lg-7 mx-auto text-center mt-7 mb-5">
              <h5 className="fw-bold fs-3 fs-lg-5 lh-sm">Popular Foods</h5>
            </div>
            <div className="col-12">
              <div className="carousel slide" id="carouselPopularItems" data-bs-touch="false" data-bs-interval="false">
                <div className="carousel-inner">
                  <div className="carousel-item active" data-bs-interval="10000">
                    <div className="row gx-3 h-100 align-items-center">
                      
                      {products.map(food=>(
                        <Card  foodItem={food}/>
                        
                      ))}
                        
                       

                    </div>
                  </div>
                 
                </div>
                
              </div>
            </div>
          </div>
        </div>

      </section>
    )
}