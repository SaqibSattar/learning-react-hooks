import React, { Component } from "react";

class ClassCounterOne extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0
    };
  }

  componentDidMount() {
    document.title = `You clicked ${this.state.count} times.`;
  }

  componentDidUpdate(prevState, prevProps) {
    document.title = `You clicked ${this.state.count} times.`
  }

  render() {
    const { count } = this.state;
    return (
      <div>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Count {count}
        </button>
      </div>
    );
  }
}

export default ClassCounterOne;
