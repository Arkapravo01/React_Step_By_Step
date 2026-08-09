const App = () => {
  return (
    <>
      <h1>Keeping Components Pure</h1>
      <Cup guest={1} />
      <Cup guest={3} />
      <Cup guest={5} />
    </>
  );
};

const Cup = ({ guest }) => {
  return (
    <h1>
      We have {guest} guest(s) and we have to make {guest} cup of tea
    </h1>
  );
};

export default App;
