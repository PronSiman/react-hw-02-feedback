import React, { Component } from 'react';
import styled from 'styled-components';
import FeedBackButton from '../FeedBackButton/FeedBackButton';
import Statistics from '../Statistics/Statistics';

const Warapper = styled.div`
  width: 375px;
  margin: 0 auto;
`;

const StyledTitle = styled.h1`
  margin-bottom: 20px;
  text-align: center;
`;
const ButtonsUl = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  padding: 0;
`;
const StyledStatisticTitle = styled.h2`
  text-align: center;
  margin-bottom: 20px;
`;
const Notification = styled.p`
  text-align: center;
`;

export default class EspressoStatictic extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  buttonClickHeadler = name => {
    this.setState(prevState => {
      return {
        [name]: prevState[name] + 1,
      };
    }, this.countTotalFeedback);
  };

  countTotalFeedback = () =>
    Object.values(this.state).reduce((acc, val) => acc + val, 0);

  render() {
    const { good } = this.state;
    const total = this.countTotalFeedback();
    const positiveFeedBack = Math.floor((good / total) * 100);
    const statsNames = Object.keys(this.state);

    return (
      <Warapper>
        <StyledTitle>Please leave feedback</StyledTitle>
        <ButtonsUl>
          {statsNames.map(buttonItem => {
            return (
              <li key={buttonItem}>
                <FeedBackButton
                  name={buttonItem}
                  onButtonClick={this.buttonClickHeadler}
                />
              </li>
            );
          })}
        </ButtonsUl>
        <StyledStatisticTitle>Statistic</StyledStatisticTitle>
        {(total !== 0 && (
          <Statistics
            statistic={this.state}
            total={total}
            positiveFeedBack={positiveFeedBack}
          />
        )) || <Notification>No feedback given</Notification>}
      </Warapper>
    );
  }
}
