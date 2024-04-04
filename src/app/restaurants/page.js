'use client'
import { useState } from "react";
import RestaurantLogin from "../_components/restaurantLogin";
import RestaurantSignUp from '../_components/restaurantSignUp'
import RestaurantHeader from "../_components/resturantHeader";
import './style.css';
const Restaurant=()=>{
 
 const[login,setLogin]=useState(true)
 
  return(
    <>
     <div className="container">
      <RestaurantHeader/>
   <h1> Restaurant Page</h1>
   {login ? <RestaurantLogin/>:<RestaurantSignUp/>}
  
<div>
    <button  className='button-link' onClick={()=>setLogin(!login)}>
      {login ? 'DO NOT  have Account? SignUp':'Already have account? Login'}
      </button>
    </div>
    </div>
    </>
  )
}
export default Restaurant;