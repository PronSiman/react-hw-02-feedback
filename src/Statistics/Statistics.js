import React from 'react';
import styled from 'styled-components';
// eslint-disable-next-line import/no-extraneous-dependencies
import propTypes from 'prop-types';

const StatisticList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Statistics = ({ statistic, total, positiveFeedBack }) => {
  const statsNames = Object.entries(statistic);

  return (
    <StatisticList>
      {statsNames.map(item => {
        return (
          <li key={item[0]}>
            <span>{item[0]}:</span> <span>{item[1]}</span>
          </li>
        );
      })}
      <span>total: {total}</span>
      <span>positive feedback: {positiveFeedBack} %</span>
    </StatisticList>
  );
};
Statistics.propTypes = {
  statistic: propTypes.objectOf(
    propTypes.oneOfType([propTypes.string, propTypes.number]),
  ).isRequired,
  total: propTypes.number.isRequired,
  positiveFeedBack: propTypes.number.isRequired,
};
export default Statistics;
