import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchmessage } from '../redux/Messages/Messages';

const Greeting = () => {
  const message = useSelector((state) => state.messageReducer.message);
  console.log(message);

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
