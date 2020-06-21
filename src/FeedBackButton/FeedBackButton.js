import React from 'react';
import styled from 'styled-components';
// eslint-disable-next-line import/no-extraneous-dependencies
import propTypes from 'prop-types';

const Button = styled.button`
  margin-left: 15px;
  margin-right: 15px;
  &:hover {
    cursor: pointer;
  }
`;
const FeedBackButton = ({ name, onButtonClick }) => {
  return (
    <Button
      onClick={() => {
        onButtonClick(name);
      }}
    >
      {name}
    </Button>
  );
};
FeedBackButton.propTypes = {
  name: propTypes.string.isRequired,
  onButtonClick: propTypes.func.isRequired,
};
export default FeedBackButton;
