import React from 'react';
import { useSelector } from 'react-redux';

const Greeting = () => {
  const message = useSelector((state) => state.messageReducer.message);

  return (
    <div>
      <h1>Greeting</h1>
      <div>
        Message:
        <h1>
          {' '}
          { message }
          {' '}
        </h1>
      </div>
    </div>
  );
};

export default Greeting;
