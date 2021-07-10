import React from 'react';
import UserContext from './UserContext';

class ComponentF extends React.Component {
  render() {
    return <div>{this.context}</div>;
  }
}
ComponentF.contextType = UserContext;
export default ComponentF;
