import React from 'react';
import ComponentC from './ComponentC'

class ComponentB extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    console.log('LifeCycleB Constructor');
  };

  static getDerivedStateFromProps = function(props, state) {
    console.log(' LifeCycleB In getDerivedStatefromProps');
    return null;
  };
  getSnapshotBeforeUpdate = function(prevProps, prevState) {
    console.log('LifeCycleB In getSnapshotBeforeUpdate');
    return null;
  };
  componentDidUpdate = function() {
    console.log('LifeCycleB In componentDidUpdate');
  };
  shouldComponentUpdate = function() {
    console.log('LifeCycleB In shouldComponentUpdate');
    return true;
  };
  componentDidMount = function() {
    console.log('LifeCycleB In ComponentDidMount');
  };
  render() {
    console.log('LifeCycleB In render');
    return <><ComponentC/></>;
  }
}
export default ComponentB;
