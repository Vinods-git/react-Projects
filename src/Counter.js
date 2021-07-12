import React from 'react';
class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    this.incrementhandler = this.incrementhandler.bind(this);
  }
  incrementhandler() {
    this.setState(prevState => ({ count: prevState.count + 1 }));
  }
  render() {
    return <>{this.props.children(this.incrementhandler,this.state.count)}</>;
  }
}
export default Counter;
