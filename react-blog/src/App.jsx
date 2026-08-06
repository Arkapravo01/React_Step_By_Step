import User from './User';

const App = () => {
  const userData = [
    {
      name: 'Anil',
      age: 29,
      email: 'anil@test.com',
      id: 1,
    },
    {
      name: 'Sam',
      age: 34,
      email: 'sam@test.com',
      id: 2,
    },
    {
      name: 'Peter',
      age: 20,
      email: 'peter@test.com',
      id: 3,
    },
    {
      name: 'Bruce',
      age: 50,
      email: 'bruce@test.com',
      id: 4,
    },
  ];

  return (
    <div>
      <h1>Reuse component in loop</h1>
      {userData.map((user) => (
        <div key={user.id}>
          <User data={user} />
        </div>
      ))}
    </div>
  );
};

export default App;
