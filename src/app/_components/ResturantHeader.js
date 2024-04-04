import Link from "next/link";

const RestaurantHeader=()=>{
  return(
    <div className="header-wrapper">
      <div className="logo">
        <img style={{width:100}} src='https://5.imimg.com/data5/AA/QU/FD/SELLER-29395649/logo-designing.jpg'/>
      </div>
      <ul>
        <li>
          <Link href='/'>Home</Link>
        </li>
        <li>
          <Link href='/'>Login/Sign Up</Link>
        </li>
        <li>
          <Link href='/'>Profile</Link>
        </li>
      </ul>
    </div>
  )
}


export default RestaurantHeader;