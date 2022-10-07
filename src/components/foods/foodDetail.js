// once once food is clicked, you can view single food item here
// see recents
import React from "react";
import { useParams, useLocation } from "react-router-dom";

export default function FoodDetail(){
    const {state} = useLocation();

    if(!state.food.foodId) return null; 
    return (
        <h1 style="margin-top:100px"> Food Detail Page for </h1>
    )
}