import React from 'react'
import classes from './Navbar.module.css'
import NavbarItem from './NavbarItem'

const Navbar = () => {

  return (
    <div className={classes.main}>
      
        <NavbarItem text = "Courses" width = "75px" order = "0"/>
        <NavbarItem text = "About Us" width = "80px" order = "1"/>
        <NavbarItem text = "Teachers" width = "82px" order = "2"/>
        <NavbarItem text = "Pricing" width = "67px" order = "3"/>
        <NavbarItem text = "Career" width = "74px" order = "4"/>
        <NavbarItem text = "Blog" width = "52px" order = "5"/>
      
    </div>
  )
}

export default Navbar
