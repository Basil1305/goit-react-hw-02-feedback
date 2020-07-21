import React, { Component } from "react";

import FeedbackOptions from "./feedbackOptions/FeedbackOptions";
import Statistics from "./statistics/Statistics";
import Section from "./section/Section";
import Notification from "./notification/Notification";

export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  PressGood = () => this.setState({ good: this.state.good + 1 });

  PressNeutral = () => this.setState({ neutral: this.state.neutral + 1 });

  PressBad = () => this.setState({ bad: this.state.bad + 1 });

  render() {
    const isShowStatistic =
      this.state.good > 0 || this.state.neutral > 0 || this.state.bad > 0;
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            onClickGood={this.PressGood}
            onClickNeutral={this.PressNeutral}
            onClickBad={this.PressBad}
          />
        </Section>
        <Section title="Statistics">
          {isShowStatistic ? (
            <Statistics
              goodNum={this.state.good}
              neutralNum={this.state.neutral}
              badNum={this.state.bad}
            />
          ) : (
            <Notification message="No feedback given" />
          )}
        </Section>
      </>
    );
  }
}
