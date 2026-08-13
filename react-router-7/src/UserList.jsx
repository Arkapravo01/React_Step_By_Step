import { Link } from 'react-router';

const UserList = () => {
  const userData = [
    { id: 1, name: 'Anil' },
    { id: 2, name: 'Sam' },
    { id: 3, name: 'Briuce' },
    { id: 4, name: 'Arka' },
    { id: 5, name: 'Peter' },
    { id: 6, name: 'Tony' },
  ];
  return (
    <div style={{ marginLeft: '20px' }}>
      <h1>User List Page</h1>
      {userData.map((user) => (
        <div>
          <h4>
            <Link to={'/users/' + user.id}>{user.name}</Link>
          </h4>
        </div>
      ))}

      <h1>User List Page with Name in URL</h1>
      {userData.map((user) => (
        <div>
          <h4>
            <Link to={'/users/' + user.id + '/' + user.name}>{user.name}</Link>
          </h4>
        </div>
      ))}
    </div>
  );
};

export default UserList;
