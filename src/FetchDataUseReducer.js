import React, { useReducer, useEffect } from 'react';
import axios from 'axios';

const initState = { post: {}, loading: true, error: null };

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_SUCCESS':
      return action.payload;
    case 'FETCH_FAILED':
      return action.payload;
    default:
      return initState;
  }
};
const FetchDataUseReducer = props => {
  const [state, dispatch] = useReducer(reducer, initState);
  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/posts/2')
      .then(res => {
        const data = res.data;
        const loading = false;
        console.log('data fetched');
        dispatch({
          type: 'FETCH_SUCCESS',
          payload: { post: data, loading: loading }
        });
      })
      .catch(err => {
        const error = err.message;
        const loading = false;
        console.log('Error Occured');
        dispatch({
          type: 'FETCH_FAILED',
          payload: { error: error, loading: loading }
        });
      });
  }, []);
  return <>{state.post?.title ? state.post.title : state.error}</>;
};
export default FetchDataUseReducer;
