import React from 'react';
import College from './College';

const App = () => {
  const collegeData = [
    {
      name: 'IET Alwar',
      city: 'Alwar',
      website: 'www.iet.com',
      student: [
        {
          name: 'Anil Sidhu',
          age: '29',
          email: 'anil@test.com',
        },
        {
          name: 'Peter',
          age: '20',
          email: 'peter@test.com',
        },
        {
          name: 'Bruce',
          age: '25',
          email: 'bruce@test.com',
        },
      ],
    },
    {
      name: 'IIT Delhi',
      city: 'Delhi',
      website: 'www.iit.com',
      student: [
        {
          name: 'Anil Sidhu',
          age: '29',
          email: 'anil@test.com',
        },
        {
          name: 'Peter',
          age: '20',
          email: 'peter@test.com',
        },
        {
          name: 'Bruce',
          age: '25',
          email: 'bruce@test.com',
        },
      ],
    },
    {
      name: 'KCIET Hisar',
      city: 'Hisar',
      website: 'www.kciet.com',
      student: [
        {
          name: 'Anil Sidhu',
          age: '29',
          email: 'anil@test.com',
        },
        {
          name: 'Peter',
          age: '20',
          email: 'peter@test.com',
        },
        {
          name: 'Bruce',
          age: '25',
          email: 'bruce@test.com',
        },
      ],
    },
  ];
  return (
    <div>
      {/* <h1>Nested Looping with Component</h1> */}
      {collegeData.map((college, index) => (
        <College college={college} />
      ))}
    </div>
  );
};

export default App;
