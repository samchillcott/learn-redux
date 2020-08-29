import React from 'react';
import {useSelector} from 'react-redux';

function App() {
  
  const counter = useSelector(state => state.counter);
  const isLogged = useSelector(state => state.isLogged);
  return (
    <div className="App">
        <h1>Counter {counter}</h1>

        {isLogged ? <h3>Valuable info you shouldn't see if not logged in</h3> : ''}
    </div>
  );
}

export default App;
