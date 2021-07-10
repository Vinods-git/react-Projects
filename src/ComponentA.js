import React from 'react';
import ComponentB from './ComponentB';

class ComponentA extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    console.log('LifeCycleA Constructor');
    this.clickHandler = this.clickHandler.bind(this);
  }
  clickHandler = function(e) {
    this.setState({ name: 'Vinod' });
    console.log('Updated');
  };
  static getDerivedStateFromProps = function(props, state) {
    console.log(' LifeCycleA In getDerivedStatefromProps');
    return null;
  };
  getSnapshotBeforeUpdate = function(prevProps, prevState) {
    console.log('LifeCycleA In getSnapshotBeforeUpdate');
    return null;
  };
  componentDidUpdate = function() {
    console.log('LifeCycleA In componentDidUpdate');
  };
  shouldComponentUpdate = function() {
    console.log('LifeCycleA In shouldComponentUpdate');
    return true;
  };
  componentDidMount = function() {
    console.log('LifeCycleA In ComponentDidMount');
  };
  render() {
    console.log('LifeCycleA In render');
    return (
      <>
        <ComponentB />
        <button onClick={this.clickHandler}>Click here</button>
      </>
    );
  }
}
export default ComponentA;
