import { useEffect } from 'react';

const Counter = ({ count, data }) => {
  const handleData = () => {
    console.log('handleData called');
  };

  const handleCounter = () => {
    console.log('handleCounter called');
  };

  const handleBoth = () => {
    console.log('Either data or count state changed');
  };

  useEffect(() => {
    handleCounter();
  }, [count]);

  useEffect(() => {
    handleData();
  }, [data]);

  useEffect(() => {
    handleBoth();
  }, [count, data]);

  return (
    <div>
      <h1>Counter Component</h1>
      <h1>Counter Value: {count}</h1>
      <h1>Data Value: {data}</h1>
    </div>
  );
};

export default Counter;
