import User from './User';

const App = () => {
  const displayName = (name) => {
    alert(name);
  };

  const getUser = () => {
    alert('get user function called');
  };

  return (
    <div>
      <h1>Call Parent Component Function from Child Component </h1>
      <User displayName={displayName} name='Arka' onClick={getUser} />
      <User displayName={displayName} name='Anil' onClick={getUser} />
      <User displayName={displayName} name='Sam' onClick={getUser} />
      <User displayName={displayName} name='Bruce' onClick={getUser} />
    </div>
  );
};

export default App;
