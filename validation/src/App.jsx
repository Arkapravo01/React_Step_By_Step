import { useActionState } from 'react';

const App = () => {
  const handleLogin = (prevData, formData) => {
    let name = formData.get('name');
    let password = formData.get('password');
    let regex = /^[A-Z0-9]+$/i;

    if (!name || name.length > 5) {
      return {
        error:
          'Name cannot be empty or Name should not contain more than 5 characters',
        name,
        password,
      };
    } else if (!regex.test(password)) {
      return {
        error: 'Password can contain only numbers and alphabets ',
        name,
        password,
      };
    } else {
      return { message: 'Login done', name, password };
    }
  };

  const [data, action, pending] = useActionState(handleLogin);

  return (
    <div>
      <h1>Validation with useActionState in React</h1>

      {data?.message && <span style={{ color: 'green' }}>{data.message}</span>}
      {data?.error && <span style={{ color: 'red' }}>{data.error}</span>}

      <form action={action}>
        <input
          defaultValue={data?.name}
          name='name'
          type='text'
          placeholder='Enter User Name'
        />
        <br />
        <br />
        <input
          defaultValue={data?.password}
          name='password'
          type='text'
          placeholder='Enter User Password'
        />
        <br />
        <br />
        <button disabled={data?.error}>Login</button>
      </form>
    </div>
  );
};

export default App;
