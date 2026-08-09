import { useFormStatus } from 'react-dom';

const CustomerForm = () => {
  const { pending } = useFormStatus();
  console.log(pending);
  return (
    <div>
      <input type='text' placeholder='Enter Name' />
      <br />
      <br />
      <input type='text' placeholder='Enter Password' />
      <br />
      <br />
      <button disabled={pending}>
        {pending ? 'Submitting....' : 'Submit'}
      </button>
    </div>
  );
};

export default CustomerForm;
