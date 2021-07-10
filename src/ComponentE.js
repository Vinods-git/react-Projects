import React from 'react';
import ComponentF from './ComponentF';
import UserContext from './UserContext';

class ComponentE extends React.Component {
  componentDidMount() {
    let value = this.context;
    console.log(value);
    /* perform a side-effect at mount using the value of MyContext */
  }
 
  componentDidUpdate() {
    let value = this.context;
    console.log(value);

    /* ... */
  }
  componentWillUnmount() {
    let value = this.context;
    console.log(value);
    /* ... */
  }

  render() {
    return <ComponentF />;
  }
}
ComponentE.contextType = UserContext;

export default ComponentE;
