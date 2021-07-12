import React from 'react';
import withCounter from './withCounter';
class HoverCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { name,count, incrementhandler } = this.props;
    return (
      <>
        <button onMouseOver={incrementhandler}>{name} Hovered {count} times </button>
      </>
    );
  }
}
export default withCounter(HoverCounter,5);
