import React, { Fragment } from 'react';
import BCKG from './wynwood.jpeg';

function Home(props) {
  const handleOnClick = () => {
    props.history.push(`/myeats`);
  };

  return (
    <div className="background-img">
      <button onClick={handleOnClick} className="eat" type="active">
        Let's Eat
      </button>
    </div>
  );
}
export default Home;
