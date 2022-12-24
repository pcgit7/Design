import React from 'react'
import Left from './Left'
import Right from './Right'
import classes from './container.module.css'

const Container = () => {
  return (
    <div className={classes.main}>
      <Left/>
      <Right/>
    </div>
  )
}

export default Container
