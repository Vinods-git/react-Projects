import React from 'react';
import CurrencyInput from './CurrencyInput';
import ReactDOM from 'react-dom';


class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      unit: '1',
      cur: 'usd'
    };
    this.tryConvert = this.tryConvert.bind(this);
    this.toINR = this.toINR.bind(this);
    this.toUSD = this.toUSD.bind(this);
    this.inputHandlerUSD = this.inputHandlerUSD.bind(this);
    this.inputHandlerINR = this.inputHandlerINR.bind(this);
    // this.tryConvert = this.tryConvert.bind(this);
  }
  tryConvert = function(unit, convert) {
    const input = parseFloat(unit);
    if (Number.isNaN(unit)) return '';
    const output = convert(input);
    return (Math.round(output * 1000) / 1000).toString();
  };

  toINR = function(c) {
    return c * 74.63;
  };
  toUSD = function(c) {
    return c / 74.63;
  };
  inputHandlerINR = function(e) {
    this.setState({ unit: e.target.value, cur: 'inr' });
  };
  inputHandlerUSD = function(e) {
    this.setState({ unit: e.target.value, cur: 'usd' });
  };
  render() {
    const unit = this.state.unit;
    const cur = this.state.cur;
    const inr = cur === 'inr' ? unit : this.tryConvert(unit, this.toINR);
    const usd = cur === 'usd' ? unit : this.tryConvert(unit, this.toUSD);
    return (
      <div>
        <CurrencyInput
          currency="inr"
          units={inr}
          inputHandler={this.inputHandlerINR}
        />
        <CurrencyInput
          currency="inr"
          units={inr}
          inputHandler={this.inputHandlerINR}
        />
      </div>
    );
  }
}

export default Calculator;
