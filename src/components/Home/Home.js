import React from 'react';

import Card from '../UI/Card/Card';
import classes from './Home.module.css';

const Home = (props) => {
  return (
    <Card className={classes.home}>
      <h1>Welcome to my Page! Now, Go Back !</h1>
    </Card>
  );
};

export default Home;
