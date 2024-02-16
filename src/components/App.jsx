import { Component } from 'react';
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Notification } from 'components/Notification/Notification';

class App extends Component {
  static defaultProps = {
    initialValue: 0,
  };

  state = {
    good: this.props.initialValue,
    neutral: this.props.initialValue,
    bad: this.props.initialValue,
  };

  onLeaveFeedback = option => {
    this.setState(prevState => ({ [option]: prevState[option] + 1 }));
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
      <div className="mainContainer">
        <Section title={'Please leave feedback'}>
          <FeedbackOptions
            options={['good', 'neutral', 'bad']}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>

        <Section title="Statistics">
          {this.countTotalFeedback() === 0 ? (
            <Notification message="There is no feedbacks yet"></Notification>
          ) : (
            <Statistics
              good={this.state.good}
              bad={this.state.bad}
              neutral={this.state.neutral}
              total={this.countTotalFeedback()}
              positiveFeedback={this.countPositiveFeedbackPeercentage()}
            />
          )}
        </Section>
      </div>
    );
  }
}

export default App;
