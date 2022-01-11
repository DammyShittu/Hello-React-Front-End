import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getGreeting } from '../redux/Greeting';

const Greeting = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGreeting());
  }, [dispatch]);

  const greeting = useSelector((state) => state.greetingReducer);

  return (
    <>
      <h1>{greeting}</h1>
    </>
  );
};

export default Greeting;
