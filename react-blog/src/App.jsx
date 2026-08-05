import React from 'react';

const App = () => {
  const name = 'peter';
  const userObj = {
    name: 'anil sidhu',
    email: 'anil@test.com',
    age: 29,
  };
  const userArray = ['sam', 'peter', 'bruce'];
  let x = 10;
  let y = 20;
  let path =
    'https://thumbs.dreamstime.com/b/random-dog-clicks-village-195026512.jpg';

  function fruit() {
    return 'Apple';
  }
  function sum(a, b) {
    return a + b;
  }
  function operation(a, b, op) {
    let result = 0;
    if (op === '+') return a + b;
    else if (op === '-') return a - b;
    else return a * b;
  }
  return (
    <>
      <h1>JSX with Curly Braces</h1>
      <h1>{name ? name : 'user not found'}</h1>
      <h1>{x + y}</h1>
      <h1>{fruit()}</h1>
      <h1>{sum(10, 100)}</h1>
      <h1>{operation(20, 10, '')}</h1>
      <h1>{userObj.age}</h1>
      <h1>{userArray[1]}</h1>
      <input type='text' value={name} id={name} />
      <br />
      <img src={path} alt='pintu' />
    </>
  );
};

export default App;
