import { Component } from 'react';
import { Buttons } from './Buttons/Buttons';
import { Statistics } from './Statistics/Statistics';

class FeedBackOptions extends Component {
  static defaultProps = {
    initialValue: 0,
  };

  state = {
    good: this.props.initialValue,
    neutral: this.props.initialValue,
    bad: this.props.initialValue,
  };

  handleGoodClick = () => {
    this.setState(({ good }) => ({
      good: good + 1,
    }));
  };

  handleNeutralClick = () => {
    this.setState(({ neutral }) => ({
      neutral: neutral + 1,
    }));
  };

  handleBadClick = () => {
    this.setState(({ bad }) => ({
      bad: bad + 1,
    }));
  };

  countTotal = () => {
    const total = this.state.good + this.state.neutral + this.state.bad;
    return total;
  };

  render() {
    return (
      <div>
        <h3>Please leave feedback</h3>

        <Buttons
          onGoodClick={this.handleGoodClick}
          onNeutralClick={this.handleNeutralClick}
          onBadClick={this.handleBadClick}
        />

        {this.countTotal() !== 0 && (
          <Statistics
            good={this.state.good}
            bad={this.state.bad}
            neutral={this.state.neutral}
            total={this.countTotal()}
            positiveFeedback={Math.round(
              (this.state.good / this.countTotal()) * 100
            )}
          />
        )}
      </div>
    );
  }
}

export default FeedBackOptions;
