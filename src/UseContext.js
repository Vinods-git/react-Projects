import React, { useContext } from 'react';
import { UserContext, ChannelContext } from './App';

const UseContext = props => {
  const user = useContext(UserContext);
  const channel = useContext(ChannelContext);
  return (
    <>
      {' '}
      {user} and {channel}
    </>
  );
};

export default UseContext;
