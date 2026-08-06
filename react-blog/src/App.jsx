import Wrapper from './Wrapper';

const App = () => {
  return (
    <div>
      <h1>Pass JSX with props</h1>
      <Wrapper color={"orange"}>
        <h1>Hello Everyone</h1>
      </Wrapper>
      <Wrapper color='blue'>
        <h1>Hello Anil</h1>
      </Wrapper>
      <Wrapper>
        <h1>Hello Admin</h1>
      </Wrapper>
      <Wrapper>
        <h2 style={{ color: 'red' }}>Hello Admin, please login</h2>
      </Wrapper>
    </div>
  );
};

export default App;
