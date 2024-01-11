import React, { Component } from "react";

class ClassCounterOne extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      name: "",
    };
  }

  componentDidMount() {
    document.title = `You clicked ${this.state.count} times.`;
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count) {
      console.log("componentDidUpdate Called ");
      document.title = `You clicked ${this.state.count} times.`;
    }
  }

  render() {
    const { count } = this.state;
    return (
      <div>
        <input
          type="text"
          onChange={(e) => this.setState({ name: e.target.value })}
        />
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Count {count}
        </button>
      </div>
    );
  }
}

export default ClassCounterOne;
