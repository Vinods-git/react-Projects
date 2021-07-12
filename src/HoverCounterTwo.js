import React from 'react';
import withCounter from './withCounter';
class HoverCounterTwo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { count, incrementhandler } = this.props;

    return (
      <>
        <button onMouseOver={incrementhandler}>Clicked {count} times </button>
      </>
    );
  }
}
export default HoverCounterTwo;
