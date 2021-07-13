import React, { useState, useEffect } from 'react';
import axios from 'axios';
const DataFetch2 = props => {
  const [posts, setPosts] = useState();
  const [id, setId] = useState('');
  const [idFromButton, setidFromButton] = useState('');

  const inputHandler = e => {
    setId(e.target.value);
  };
  const buttonHandler = () => {
    setidFromButton(id);
  };

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(res => {
        let data = res.data;
        setPosts(data);
        console.log(data);
      })
      .catch(err => console.log(err));
  }, [idFromButton]);

  return (
    <>
      <input value={id} onChange={inputHandler} />
      <button onClick={buttonHandler}>buttonHandler</button>
      {posts && <div>{posts.title}</div>}
    </>
  );
};
export default DataFetch2;
