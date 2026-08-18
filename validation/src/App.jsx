import { use, Suspense } from 'react';

const fetchData = () =>
  fetch('https://dummyjson.com/users').then((response) => response.json());

const userResource = fetchData();

const App = () => {
  return (
    <div>
      <h1>useApi in React Js</h1>
      <Suspense fallback={<p>Loading....</p>}>
        <Users />
      </Suspense>
    </div>
  );
};

export default App;

const Users = () => {
  const userData = use(userResource);
  console.log(userData.users);

  return (
    <div>
      <h1>Users List</h1>
      {userData?.users?.map((user) => (
        <ul>
          <li>{user.firstName}</li>
          <li style={{ listStyle: 'none' }}>{user.lastName}</li>
        </ul>
      ))}
    </div>
  );
};
