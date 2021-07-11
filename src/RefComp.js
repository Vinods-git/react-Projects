import React from 'react';
class RefComp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.inputRef = React.createRef();
    this.cbRef = null;
    this.setCbRef = element => {
      this.cbRef = element;
    };
    this.clickHandler = this.clickHandler.bind(this);
  }
  componentDidMount() {
    this.cbRef.focus();
    // this.inputRef.current.focus();
    // console.log(this.inputRef);
  }
  clickHandler = function() {
    // alert(this.inputRef.current.value);
    alert(this.cbRef.value);
  };
  render() {
    return (
      <>
        <input ref={this.inputRef} />
        <input ref={this.setCbRef} />
        <button type="submit" onClick={this.clickHandler}>
          Click
        </button>
      </>
    );
  }
}
export default RefComp;
