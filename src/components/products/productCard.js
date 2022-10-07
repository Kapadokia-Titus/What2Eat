
import React from "react"
import { Link } from "react-router-dom"
export default function Card({foodItem, onOrderClick}){


    return(
    <div className="col-sm-6 col-md-4 col-lg-3 h-100 mb-5">
        <div className="card card-span h-100 rounded-3"><img className="img-fluid rounded-3 h-100"  src={foodItem.food.image} alt="..." />
        <div className="card-body ps-0">
            <h5 className="fw-bold text-1000 text-truncate mb-1">{foodItem.food.label}</h5>
            <div><span className="text-warning me-2"><i className="fas fa-map-marker-alt"></i></span><span className="text-primary">{foodItem.food.brand}</span></div><span className="text-1000 fw-bold">${Math.random()}</span>
        </div>
        </div>
        <div className="d-grid gap-2">
            <Link to={
                {
                    pathname:`/food/${foodItem.food.foodId}`, 
                    state:{foodItem}
                }
            }>
            <a className="btn btn-lg btn-danger" role="button">Order now</a>
            </Link>
           
            
            </div>
    </div>
  )
}