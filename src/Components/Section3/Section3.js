import React from 'react'
import classes from './Section3.module.css'
import Teacher from './Teachers/Teacher'

const Section3 = () => {
  return (
    <div className={classes.main}>
     <div className={classes.text}>
     <h3>KEY PERSONS</h3>
     <h2>Meet Our teachers</h2> 
     </div>  
     <Teacher/>
    </div>
  )
}

export default Section3
