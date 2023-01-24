import React from 'react';
import PropTypes from './components/PropTypes';
import FunctionComponents from './components/FunctionComponents';
import Hooks from './components/Hooks';

function App() {
  return (
    <div className="App">
      <h3>Learning React Typescript</h3>
      <PropTypes />
      <FunctionComponents message={"This is how props are passed on functional components"} />
      <Hooks name={"Mike"} age={20} isMarried={true} />
    </div>
  );
}

export default App;
