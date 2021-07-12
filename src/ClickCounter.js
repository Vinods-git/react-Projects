import React from 'react';
import withCounter from './withCounter';
class ClickCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { name, count, incrementhandler } = this.props;

    return (
      <>
        <button onClick={incrementhandler}>
          {name} Clicked {count} times{' '}
        </button>
      </>
    );
  }
}
export default withCounter(ClickCounter,10);
