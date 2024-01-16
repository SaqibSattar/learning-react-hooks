import React, { Component } from "react";

class ClassTimer extends Component {
    timerInterval
  constructor(props) {
    super(props);

    this.state = {
      timer: 0,
    };
  }

  componentDidMount() {
    this.timerInterval = setInterval(() => {
      this.setState((prevState) => ({
        timer: prevState.timer + 1,
      }));
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerInterval);
  }

  render() {
    return (
      <div>
        ClassTimer - {this.state.timer}
        <button
          onClick={() => {
            clearInterval(this.timerInterval);
          }}
        >
          {" "}
          Clear Timer
        </button>
      </div>
    );
  }
}

export default ClassTimer;
