import React, { Component, PropTypes } from 'react';
import _padStart from 'lodash/padStart';

import Button from 'components/Button';
import './style.scss';

export default class Counter extends Component {
  static propTypes = {
    saveLaps: PropTypes.func.isRequired,
  };

  state = {
    counter: 0,
    isStarted: false,
    isPaused: false,
  };

  lap = 0;

  componentWillUnmount() {
    clearInterval(this.counterInterval);
  }

  render() {
    const { counter, isStarted, isPaused } = this.state;
    const { hours, minutes, seconds, milliseconds } = this.calculateTime(counter);

    return (
      <div className="counter">
        <p className="counter__digits">
          <span className="counter__digit">{hours}</span>
          <span className="counter__divider">:</span>
          <span className="counter__digit">{minutes}</span>
          <span className="counter__divider">:</span>
          <span className="counter__digit">{seconds}</span>
          <span className="counter__divider">:</span>
          <span className="counter__digit">{milliseconds}</span>
        </p>
        <div className="counter__buttons">
          {(isStarted && !isPaused) && <Button onClick={this.handlePause}>Pause</Button>}
          {isStarted && <Button onClick={this.handleStop}>Stop</Button>}
          {(!isStarted || (isStarted && isPaused)) && <Button onClick={this.handleStart}>Start</Button>}
          {isStarted && <Button onClick={this.handleSaveLap}>Save Lap</Button>}
        </div>
      </div>
    );
  }

  handlePause = () => {
    clearInterval(this.counterInterval);
    this.setState({
      isPaused: true,
    });
  };

  handleStart = () => {
    this.setState({
      isStarted: true,
      isPaused: false,
    });
    this.counterInterval = setInterval(() => this.counterStart(), 10);
  };

  handleStop = () => {
    clearInterval(this.counterInterval);
    this.setState({
      counter: 0,
      isStarted: false,
      isPaused: false,
    });

    this.lap = 0;
  };

  handleSaveLap = () => {
    const { hours, minutes, seconds, milliseconds } = this.calculateTime(this.lap);
    const lapString = `${hours}:${minutes}:${seconds}:${milliseconds}`;

    this.lap = 0;
    this.props.saveLaps(lapString);
  };

  counterStart() {
    this.setState(prevState => ({
      counter: prevState.counter + 10,
    }));

    this.lap += 10;
  }

  calculateTime(counter) {
    const hours = this.formatDigits(Math.floor((counter / (1000 * 60 * 60))));
    const minutes = this.formatDigits(Math.floor((counter / (1000 * 60)) % 60));
    const seconds = this.formatDigits(Math.floor((counter / 1000) % 60));
    const milliseconds = this.formatDigits(Math.floor((counter % 1000) / 10));

    return {
      hours,
      minutes,
      seconds,
      milliseconds,
    };
  }

  formatDigits(value) {
    return _padStart(value, 2, 0);
  }
}
