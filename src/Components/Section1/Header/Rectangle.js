import React from 'react'
import classes from './Rectangle.module.css'

const Rectangle = (props) => {
    
  return (
    <div className={classes.rectangle_main} style={{background : props.color , top : props.top , left : props.left }}>
    </div>
  )
}

export default Rectangle
