import React from 'react';
import PropTypes from './components/PropTypes';
import FunctionComponents from './components/FunctionComponents';
import Hooks from './components/Hooks';
import ClassComponent from './components/ClassComponents';

function App() {
  return (
    <div className="App">
      <h3>Learning React Typescript</h3>
      <PropTypes />
      <FunctionComponents message={"This is how props are passed on functional components"} />
      <Hooks name={"Mike"} age={20} isMarried={true} />
      <ClassComponent message={"This is how to structure class components in a react typescript application"} />
    </div>
  );
}

export default App;
