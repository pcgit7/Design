import React from 'react'
import classes from './left.module.css'

const Left = () => {
  return (
    <div className={classes.main}>
        <div className={classes.para}>

         <h1 className={classes.up}>
            A <span style={{color : "#524FD5"}}>Unique </span> approach to               learning foreign languages online
        </h1>

        <p className={classes.down}>
            Learn at your own pace, with lifetime access on mobile and desktop
        </p>

        </div>
        <div className={classes.btnn}>
            <span className={classes.text}>Get Started</span>
        </div>
    </div>
  )
}

export default Left
