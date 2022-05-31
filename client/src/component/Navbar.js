import React from 'react'




const logo = new URL("../images/picture3.png", import.meta.url)

const Navbar = () => {
  return (
    <>
      <nav>
        <div className="nav_class">
       <div className="brand_logo left">
            <div className="container">
              <img className="img_logo" src={logo} width="100" height="100" />


            </div>
            <div><h3>Deuce of Hearts</h3></div></div>


          <ul id="nav-mobile" className="right">
            <li>Login</li>
            <li>Signup</li>
          </ul>
        </div>
      </nav>

    </>
  )

}
export default Navbar