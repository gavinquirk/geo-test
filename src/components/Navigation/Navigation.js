import React from "react";

import NavigationItems from './NavigationItems/NavigationItems'

import classes from './Navigation.css'

const navigation = () => {
  return (
    <div className={classes.Navigation}>
      <p>LOGO</p>
      <NavigationItems />
    </div>
  );
};

export default navigation;
