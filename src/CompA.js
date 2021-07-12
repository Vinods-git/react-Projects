import React from 'react';
import UserContext from './UserContext';
class CompA extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    console.log(this.context);
  }
  componentDidMount() {
    console.log(this.context);
  }
  static getDerivedStateFromProps = function(props, state) {
    return null;
  };
  render() {
    return <>{this.context}</>;
  }
}

CompA.contextType = UserContext;
export default CompA;
