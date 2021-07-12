import React from 'react';
import axios from 'axios';
class ApiReq extends React.Component {
  constructor(props) {
    super(props);
    this.state = { posts: [], error: null };
  }
  componentDidMount() {
    axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then(res => {
        console.log(res);
        this.setState({ posts: res.data });
      })
      .catch(error => {
        console.log(error);

        this.setState({ error: error.message });
      });
  }
  render() {
    const { posts, error } = this.state;
    return (
      <>
        {posts ? posts.map(post => <div>{post.title}</div>) : null}
        {error ? error : null}
      </>
    );
  }
}
export default ApiReq;
