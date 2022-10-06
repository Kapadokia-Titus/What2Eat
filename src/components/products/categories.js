import CategoriesCard from "./categoryCard";
import React, {useEffect, useState} from "react";

export default function Categories(){

    const [categories, setCategories] = useState([]); 

    

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
            .then(response => setCategories(response.hints))
            .catch(err => console.error(err));
    },[])

    return(
        <section className="py-8 overflow-hidden">

        <div className="container">
          <div className="row flex-center mb-6">
            <div className="col-lg-7">
              <h5 className="fw-bold fs-3 fs-lg-5 lh-sm text-center text-lg-start">Search by Food</h5>
            </div>
            <div className="col-lg-4 text-lg-end text-center"><a className="btn btn-lg text-800 me-2" href="#" role="button">VIEW ALL <i className="fas fa-chevron-right ms-2"></i></a></div>
            <div className="col-lg-auto position-relative">
              <button className="carousel-control-prev s-icon-prev carousel-icon" type="button" data-bs-target="#carouselSearchByFood" data-bs-slide="prev"><span className="carousel-control-prev-icon hover-top-shadow" aria-hidden="true"></span><span className="visually-hidden">Previous</span></button>
              <button className="carousel-control-next s-icon-next carousel-icon" type="button" data-bs-target="#carouselSearchByFood" data-bs-slide="next"><span className="carousel-control-next-icon hover-top-shadow" aria-hidden="true"></span><span className="visually-hidden">Next</span></button>
            </div>
          </div>
          <div className="row flex-center">
            <div className="col-12">
              <div className="carousel slide" id="carouselSearchByFood" data-bs-touch="false" data-bs-interval="false">
                <div className="carousel-inner">
                  <div className="carousel-item active" data-bs-interval="10000">
                    <div className="row h-100 align-items-center">
                      
                     {categories.map(category=>{
                        <CategoriesCard item={category}/>
                     })}
                      
        
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