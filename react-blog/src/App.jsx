import CustomerForm from './CustomerForm';

const App = () => {
  const handleSubmit = async () => {
    await new Promise((res) => setTimeout(res, 2000));
    console.log('Submit');
  };

  return (
    <div>
      <h1>useFormStatus Hook in React Js 19</h1>
      <form action={handleSubmit}>
        <CustomerForm />
      </form>
    </div>
  );
};

export default App;
