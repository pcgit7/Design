import React from 'react'
import classes from './Section2.module.css'

import Heading from './heading/Heading'
import Value from './Values/Value'

const Section2 = () => {
  return (
    <div className={classes.main}>
      <Heading/>
      <Value/>
    </div>
  )
}

export default Section2
