import React,{useState} from 'react'
import "./navbar.css"
import {FaHamburger} from "react-icons/fa"
import { MdOutlineRestaurantMenu } from 'react-icons/md'
import images from "../../constants/images"


  export const Navlink = ({handleClick}) =>{
   return  (
   <>
    <li className="p__opensans"><a href="#Home" onClick={handleClick}>Home</a></li>
    <li className="p__opensans"><a href="#About" onClick={handleClick}>About</a></li>
    <li className="p__opensans"><a href="#Menu" onClick={handleClick}>Menu</a></li>
    <li className="p__opensans"><a href="#Awards" onClick={handleClick}>Awards</a></li>
    <li className="p__opensans"><a href="#Contact" onClick={handleClick}>Contact Us</a></li> 
    </>
    )
  }


const Navbar = () => {
  const [ToggleMenu, setToggleMenu] = useState(false)

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo ">
        <img src={images.gericht} alt="gericht"/>
      </div>
      <ul className="app__navbar-navigations flex__center" id="overwrite">
      <Navlink/>
      </ul>
      <div className="app__navbar-sign flex__center ">
        <a href="#login" className="p__opensans">Log in / registration</a>
        <div/>
        <a href="/" className="p__opensans">Book Table</a>
      </div>
      <div className="app__navbar-menuscreen" >
        <FaHamburger  fontSize={27} onClick= {() =>setToggleMenu(true)}/>
        {
          ToggleMenu && (
            <div className="app__navbar-menuscreen_overlay flex__center slide-bottom">
              <MdOutlineRestaurantMenu className="overlay__close" fontSize={27}  onClick= {() =>setToggleMenu(false)}/>
            <ul className="app__navbar-menuscreen_links">
              <Navlink handleClick={() =>  setToggleMenu(false)}/>
              <div className="app__navbar-menuscreen_links-login">
                <li><a className="p__opensans" href="#login" handleClick={() =>  setToggleMenu(false)}>Log in / registration</a></li>
                <div/>
                <li><a className="p__opensans" href="#login" handleClick={() =>  setToggleMenu(false)}>Book Table</a></li>
              </div>
            </ul>
            </div>
          )
        }
      </div>
    </nav>
  )
}

export default Navbar