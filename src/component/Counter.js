import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    // displayCount: [1]
  };
  handleClick = () => {
    this.setState({
      count: this.state.count + 1,
      // displayCount: this.state.displayCount.concat(this.state.count + 1),
    });
  };

  handleMinus = () => {
    this.setState({
      count: this.state.count - 1,
    });
  };

  render() {
    return (
      <div>
        <h4>Counter</h4>
        {/* {this.state.displayCount.map((i) => {
          return <span>{i + " "}</span>;
        })} */}
        <button onClick={this.handleMinus}>-</button>
        {this.state.count}
        <button onClick={this.handleClick}>+</button>
      </div>
    );
  }
}

export default Counter;
