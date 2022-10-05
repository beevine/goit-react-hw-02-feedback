import React, { Component } from 'react';
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Notification } from './Notification/Notification';
import { Statistics } from './Statistics/Statistics';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onHandleClick = evt => {
    const feedback = evt.target.name;
    this.setState(prevState => ({ [feedback]: prevState[feedback] + 1 }));
    console.log(feedback);
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPct = () => {
    if (this.state.good === 0) {
      return 0;
    }
    return Math.round((this.state.good / this.countTotalFeedback()) * 100);
  };

  render() {
    const { good, neutral, bad } = this.state;

    return (
      <>
        <Section title="Please leave your feedback below:">
          <FeedbackOptions
            options={['good', 'neutral', 'bad']}
            onHandleClick={this.onHandleClick}
          />
        </Section>

        <Section title="Statistics:">
          {this.countTotalFeedback() === 0 ? (
            <Notification message="Seems like nobody has left feedback yet. Be the first one!" />
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              percentage={this.countPositiveFeedbackPct()}
            ></Statistics>
          )}
        </Section>
      </>
    );
  }
}
