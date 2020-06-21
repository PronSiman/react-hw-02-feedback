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

const Statistics = ({ statistic }) => {
  const statsNames = Object.entries(statistic);

  return (
    <StatisticList>
      {statsNames.map(item => {
        return (
          <li key={item[0]}>
            <span>{item[0]}:</span>{' '}
            <span>
              {item[1]}
              {item[0] === 'positiveFeedbacks' ? '%' : ''}
            </span>
          </li>
        );
      })}
    </StatisticList>
  );
};
Statistics.propTypes = {
  statistic: propTypes.objectOf(propTypes.array).isRequired,
};
export default Statistics;
