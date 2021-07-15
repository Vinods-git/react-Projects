import React, { useState } from 'react';
import useInputUser from './useInputUser';
const UserForm = props => {
  const [fn, bindfn, resetfn] = useInputUser('');
  const [ln, bindln, resetln] = useInputUser('');
  const submitHandler = e => {
    e.preventDefault();
    alert(`Hello ${fn} ${ln}`);
    resetfn();
    resetln();
  };
  return (
    <form onSubmit={submitHandler}>
      <label>Toto</label>
      <div>
        <input type="text" {...bindfn} />
      </div>
      <div>
        <input type="text" {...bindln} />
      </div>
      <button>submit</button>
    </form>
  );
};
export default UserForm;
