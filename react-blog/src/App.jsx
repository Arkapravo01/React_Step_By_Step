import { useActionState } from 'react';

const App = () => {
  const handleSubmit = async (previousData, formData) => {
    let name = formData.get('name');
    let password = formData.get('password');

    await new Promise((res) => setTimeout(res, 2000));
    if (name && password) {
      return { message: 'Data Submitted', name, password };
    } else {
      return { error: 'Failed to Submit. Enter proper data', name, password };
    }
  };
  const [data, action, pending] = useActionState(handleSubmit, undefined);
  console.log(data);

  return (
    <div>
      <h1>useActionStateHook in React Js</h1>
      <form action={action}>
        <input
          defaultValue={data?.name}
          type='text'
          placeholder='Enter Name'
          name='name'
        />
        <br />
        <br />
        <input
          defaultValue={data?.password}
          type='password'
          placeholder='Enter password'
          name='password'
        />
        <br />
        <br />
        <button disabled={pending}>Submit Data</button>
        <br />
      </form>
      {data?.error && <span style={{ color: 'red' }}>{data?.error}</span>}
      {data?.message && <span style={{ color: 'green' }}>{data?.message}</span>}

      <h3>NAME: {data?.name}</h3>
      <h3>PASSWORD: {data?.password}</h3>
    </div>
  );
};

export default App;
