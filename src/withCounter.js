import React from 'react';

const withCounter = (WrapperComponent, increment) => {
  class WithCounter extends React.Component {
    constructor(props) {
      super(props);
      this.state = { count: 0 };
      this.incrementhandler = this.incrementhandler.bind(this);
    }
    incrementhandler() {
      this.setState(prevState => ({ count: prevState.count + increment }));
    }
    render() {
      return (
        <WrapperComponent
          count={this.state.count}
          incrementhandler={this.incrementhandler}
          {...this.props}
        />
      );
    }
  }
  return WithCounter;
};

export default withCounter;
