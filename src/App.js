import React from 'react';
import './App.scss';
import Pomodoro from './components/pomodoro';

function App() {

  let list = ['steve', 'dave', 'john'];
  let elements = list.map( item => <Pomodoro name={item}/>);

  return (
    <div className="App">

      {elements}
        
    </div>
  );
}

export default App;
