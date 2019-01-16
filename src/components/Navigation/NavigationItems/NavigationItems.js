import React from 'react'

import NavigationItem from './NavigationItem/NavigationItem'

import classes from './NavigationItems.css'

const NavigationItems = () => {
  return (
    <div className={classes.NavigationItems}>
      <NavigationItem />
      <NavigationItem />
      <NavigationItem />
    </div>

  )
}

export default NavigationItems