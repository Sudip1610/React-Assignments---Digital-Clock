import React, { Component, useState } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: new Date().toLocaleTimeString()
    };
  }
  componentDidMount() {
    console.log("mounted");
    this.intervalId = setInterval(
      () => this.setState({ display: new Date().toLocaleTimeString() }),
      1000
    );
  }

  /*getTimeString(d) {
    let hrs = d.getHours();
    let suffix = hrs >= 12 ? "PM" : "AM";
    if (hrs > 12) {
      hrs -= 12;
    }
    let min = d.getMinutes();
    if (min < 10) {
      min = "0" + min;
    }
    let sec = d.getSeconds();
    if (sec < 10) {
      sec = "0" + sec;
    }
    let newTime = hrs + ":" + min + ":" + sec + " " + suffix;
    this.setState({ time: new Date(), display: newTime });
  }*/

  componentWillUnmount() {
    console.log("unmounted");
    clearInterval(this.intervalId);
  }
  render() {
    return (
      <div className="Clock">
        <h3 id="time">{this.state.display}</h3>
      </div>
    );
  }
}

export default App;
