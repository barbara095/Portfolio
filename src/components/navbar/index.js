import React from "react";
import { Link, useLocation } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { NavbarData } from "../navData";
import 'semantic-ui-react';
import './style.css';
import { IconContext } from 'react-icons';

function Navbar() {
  
  const location = useLocation();

  const [sidebar, setSidebar] = React.useState(false);
  const showSidebar = () => setSidebar(!sidebar);

  return (
    
    <IconContext.Provider value={{color: '#fff', backgroundColor: '#rgb(241, 144, 126)'}}>
    <div className="navbar">
        <Link to="#" className='menu-bars'>
          <FaIcons.FaBars onClick={showSidebar}/>
        </Link>
      </div>

       <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
        <ul className='nav-menu-items' onClick={showSidebar}>
          <li className='navbar-toggle'>
            <Link to="#" className='menu-bars'>
              <AiIcons.AiOutlineClose />
            </Link>
          </li>

          {NavbarData.map((item, index) => {
            return (
              <li key={index} className={item.cName}>
                <Link to={item.path}>
                  {item.icon}
                  <span>{item.title}</span>
                </Link>
              </li>
        
            );
          })}
        </ul>
      </nav>
      </IconContext.Provider>
      
  );
}

export default Navbar;