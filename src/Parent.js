import React from 'react';
import PureComp from './PureComp';
import RegularComp from './RegularComp';
import MemoComp from './MemoComp';
import RefComp from './RefComp';

class Parent extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = { name: 'Vinod' };
  }
  
  render() {
    console.log('Parent Component...');

    return (
      <>
        <RefComp />
        {/* <RegularComp name={this.state.name} />
        <PureComp name={this.state.name} /> */}
      </>
    );
  }
}
export default Parent;
