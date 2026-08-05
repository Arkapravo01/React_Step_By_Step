import React from 'react';

const Todo = () => {
  const callFun = () => {
    alert('Fn Called');
  };
  return (
    <div>
      Hello Todo Component
      <h1>Arka Todos</h1>
      <img src='test' alt='' />
      <ul>
        <li>Invent new traffic lights</li>
        <li>Rehearse a movie scene</li>
        <li>Improve the spectrum technology</li>
      </ul>
      <button onClick={callFun}>Click</button>
    </div>
  );
};

export default Todo;
