import React, {useState} from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import {SidebarData} from './SidebarData'
import './Navigation.css';
import{IconContext} from  'react-icons' 
function Navbar() {
    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);
     return (  
        <>
        <IconContext.Provider value={{color:'white'}}>
    <div className="navbar"> 
    <h3 className="header">Pizza Company</h3>
        <Link to="#" className='menu-bars'>
        <FaIcons.FaBars onClick= {showSidebar} />
        </Link>
    </div> 

    <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
        <ul className='name-menu-items'>
            <li className='navbar-toggle'>
                <Link to="#" className='menu-bars'>
                     <AiIcons.AiOutlineClose onClick= {setSidebar}/>
                </Link>
            </li>
    {SidebarData.map((item, index) =>{
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
  </>
  );
}

export default Navbar