const RestaurantLogin=()=>{
  return(
    <>
    
   <h3> Login Component</h3>
   <div className="input-field"> 
    <input type="text" placeholder="Enter Email"/>
       </div>
       <div type='input-field'> 
    <input type="password" placeholder="Enter Password"/>
       </div>
       <div className="input-field">
        <button className="button">Login</button>
       </div>
 
    </>
  )
}

export default RestaurantLogin;