import { Link } from 'react-router';

const PageNotFound = () => {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Page Not Found</h1>
      <div>
        {' '}
        <Link to='/'>Go to Home Page</Link>
      </div>
      <img
        style={{ width: '60%' }}
        src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_5EQ-bTq_l6yx7qsI2YvzYdg2JrIcn47XbJkbte-DIw&s=10'
        alt=''
      />
    </div>
  );
};

export default PageNotFound;
