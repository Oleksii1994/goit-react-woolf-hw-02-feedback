import { Component } from 'react';
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';

class App extends Component {
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

  countTotalFeedback = ({ good, bad, neutral } = this.state) => {
    const total = good + neutral + bad;
    return total;
  };

  countPositiveFeedbackPeercentage = () => {
    const { good } = this.state;
    const positiveFeedbackPercentsge = Math.round(
      (good / this.countTotalFeedback()) * 100
    );
    return positiveFeedbackPercentsge;
  };

  render() {
    return (
      <div>
        <Section title={'Please leave feedback'}>
          <FeedbackOptions
            onGoodClick={this.handleGoodClick}
            onNeutralClick={this.handleNeutralClick}
            onBadClick={this.handleBadClick}
          />
        </Section>

        {this.countTotalFeedback() !== 0 && (
          <Section title="Statistics">
            <Statistics
              good={this.state.good}
              bad={this.state.bad}
              neutral={this.state.neutral}
              total={this.countTotalFeedback()}
              positiveFeedback={this.countPositiveFeedbackPeercentage()}
            />
          </Section>
        )}
      </div>
    );
  }
}

export default App;
