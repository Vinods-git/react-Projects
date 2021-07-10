import React from 'react';
import ReactDOM from 'react-dom';

const Currency = {
  usd: 'USD',
  inr: 'INR'
};

class CurrencyInput extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <fieldset>
        <label>{Currency[this.props.currency]}</label>
        <input value={this.props.units} onChange={this.props.inputHandler} />
      </fieldset>
    );
  }
}

export default CurrencyInput;
