import React from 'react'
import classes from './NavbarItem.module.css'

const NavbarItem = (props) => {
  return (
    <div className={classes.main} style={ { width : props.width , order : props.order} } > <a  className={classes.text} > {props.text} </a> 
    </div>
  )
}

export default NavbarItem
