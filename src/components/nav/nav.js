import React, {useState} from "react";
import { Link } from "react-router-dom";

export default function NavBar({onSearch}){

  //holds the search keyword
  const [search, setSearch] = useState([])

  //listens to changes in search
  function handleChange(event){
    // initialize key
    const key = event.target.id; 
    // set search
    setSearch({search, key:event.target.value})
    onSearch(search)
  }
 
   return(
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top" data-navbar-on-scroll="data-navbar-on-scroll">
    <div className="container"><a className="navbar-brand d-inline-flex" href="index.html"><span className="text-1000 fs-3 fw-bold ms-2 text-gradient"><Link to="/">What2Eat</Link></span></a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"> </span></button>
      <div className="collapse navbar-collapse border-top border-lg-0 my-2 mt-lg-0" id="navbarSupportedContent">
        <div className="mx-auto pt-5 pt-lg-0 d-block d-lg-none d-xl-block">
          <p className="mb-0 fw-bold text-lg-center">Deliver to: <i className="fas fa-map-marker-alt text-warning mx-2"></i><span className="fw-normal">Current Location </span><span>Nyali Cinemax, Mombasa</span></p>
        </div>
        <form className="d-flex mt-4 mt-lg-0 ms-lg-auto ms-xl-0">
          <div className="input-group-icon pe-2"><i className="fas fa-search input-box-icon text-primary"></i>
            <input className="form-control border-0 input-box bg-100" type="search" placeholder="Search Food" onChange={handleChange} aria-label="Search" />
          </div>
          <button className="btn btn-white shadow-warning text-warning" type="submit"> <i className="fas fa-user me-2"></i><Link to="/foods">Discover</Link></button>
        </form>
      </div>
    </div>
  </nav>
   )
}