import React from 'react';

class PureComp extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
    
  }
  render() {
    console.log('Pure Component...');
    return <>Pure Component {this.props.name}</>;
  }
}

export default PureComp;
