import React from 'react';

const Pomodoro = (props) => {
  return (
    <div className="Pomodoro"> 
      <p>This is a pomodoro app {props.name}</p>
    </div>
  );
};


export default Pomodoro;