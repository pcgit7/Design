import React from 'react'
import classes from './ValueItem.module.css'

const ValueItem = (props) => {
  return (
    <div className={classes.main} style = { {'left' : props.left , 'top' : props.top} }>
      <div className={classes.icon}>
        <img src={props.imgSrc} ></img>
      </div>

      <h3>{props.title}</h3>

      <p>{props.desc}</p>

    </div>
  )
}

export default ValueItem
