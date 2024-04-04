const RestaurantSignUp=()=>{
  return(
    <>
     
        <h3> SignUp</h3>

   <div className="input-field"> 
    <input type="text" placeholder="Enter Email"/>
       </div>

       <div className="input-field"> 
    <input type="password" placeholder="Enter password"/>
       </div>

       <div className="input-field"> 
    <input type="password" placeholder="Confirm-password"/>
       </div>

       <div className="input-field"> 
    <input type="text" placeholder="Enter Restaurant Name"/>
       </div>

       <div className="input-field"> 
    <input type="text" placeholder="Enter city"/>
       </div>

       <div className="input-field"> 
    <input type="text" placeholder="Enter adress"/>
       </div>
       <div className="input-field">
        <button className="button">Sign Up</button>
       </div>
    
    </>
  
  )
}

export default RestaurantSignUp;