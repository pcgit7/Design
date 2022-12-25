import React from 'react'
import ValueItem from './ValueItem';
import classes from './Value.module.css'

const Value = () => {

    const obj1 = {
        'title' :  "Speaking Clubs",
         'desc' :  "In our school you will practice your speaking skills and just get a lot of positive emotions!",
         'left': "49px",
         'top' : "189.69px"
    };

    const obj2 = {
        'title' : "Quality Control",
         'desc' :  "A huge work has been done with the teachers and their work has been monitored thoroughly. ",
         'left': "459px",
         'top' : "189.69px"
    };

    const obj3 = {
        'title' : "Progress analysis",
         'desc' : "The CEF of Reference has been used at our school. It allows to control our students’ success in studying.",
         'left': "866px",
         'top' : "189.69px",
        
    };

  return (
    <div className={classes.main}>

      <ValueItem {...obj1}/>
      <ValueItem {...obj2}/>
      <ValueItem {...obj3}/>

    </div>
  )
}

export default Value
