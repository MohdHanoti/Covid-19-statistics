import React from 'react';
import './css/Header.css'
import {Link}  from "react-router-dom";
import { Navbar, NavItem } from 'react-bootstrap';

class Header extends React.Component {
  render(){
    return(<>

    <div className='Head'>
    
    <h1 className='Title'> COVID-19 STATISTICS </h1>
    
   
    </div>
    <div >
      <Navbar className='navBar' bg="dark" variant="dark" >
        <NavItem className='NavItem'><Link to="/" className="nav-link"  >Home</Link></NavItem>
        <NavItem className='NavItem'><Link to="/AllCountries" className="nav-link"  >All  Countries  </Link></NavItem>
        <NavItem className='NavItem'><Link to="/MyRecords" className="nav-link"> My Records  </Link></NavItem>
    
      </Navbar>
      </div>
      </>
    )
  }
}

export default Header;