import React from 'react'
import classes from './Header.module.css'
import Rectangle from './Rectangle'
import Navbar from './Navbar/Navbar'
const Header = () => {
  const rec1 = { color : '#524FD5' ,left : '18.45px' , top: '8.47px' } ;
  const rec2 = { color : '#FFC0B4' ,left : '36.73px' , top: '8.47px' } ;

  return (
    <div className={classes.header_main}>
      <div className={classes.icon}>
      <Rectangle {...rec1}/>
      <Rectangle {...rec2}/>
      <a className={classes.text}>Lingua</a>
      </div>

      <Navbar/>
      
      <div className={classes.btnn} >
        <a className={classes.btnn_text}>Get Started</a>
      </div>
    </div>
  )
}

export default Header
