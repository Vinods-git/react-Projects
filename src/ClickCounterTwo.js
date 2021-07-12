import React from 'react';
import withCounter from './withCounter';
class ClickCounterTwo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { count, incrementhandler } = this.props;

    return (
      <>
        <button onClick={incrementhandler}>Clicked {count} times </button>
      </>
    );
  }
}
export default ClickCounterTwo;
