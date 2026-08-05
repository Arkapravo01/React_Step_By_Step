import React from 'react';

const App = () => {
  const callFun = () => {
    alert('Click');
  };

  const fruit = (fruit) => {
    alert(`${fruit}`);
  };

  return (
    <div>
      <h1>Event and function call</h1>
      <button onClick={() => fruit('apple')}>Apple</button>
      <button onClick={() => fruit('banana')}>Banana</button>
    </div>
  );
};

export default App;
