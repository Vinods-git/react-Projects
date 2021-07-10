import React from 'react';
import PureComp from './PureComp';
import RegularComp from './RegularComp';

class Parent extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = { name: 'Vinod' };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({ name: 'Vinod' });
    }, 2000);
  }
  render() {
    console.log('Parent Component...');

    return (
      <>
        <RegularComp name={this.state.name} />
        <PureComp name={this.state.name} />
      </>
    );
  }
}
export default Parent;
