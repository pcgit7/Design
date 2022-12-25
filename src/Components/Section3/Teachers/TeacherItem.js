import React from 'react'
import classes from './TeacherItem.module.css'
const TeacherItem = (props) => {
  return (
    <div className={classes.main} style = { { left : props.left } }>
      <img src={props.imgSrc} style = {{'objectPosition' : props.object_position}}></img>
      <h4>{props.name}</h4>
      <div className={classes.flag}>
        <img src={props.flag}></img>
        <h5>{props.nation} teacher</h5>
      </div>
    </div>
  )
}

export default TeacherItem
