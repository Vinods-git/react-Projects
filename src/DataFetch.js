import React, { useState, useEffect } from 'react';
import axios from 'axios';
const DataFetch = props => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then(res => {
        let data = res.data;
        setPosts(data);
        console.log(data);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <ul>
      {posts.map(post => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
};
export default DataFetch;
