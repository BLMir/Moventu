import React from 'react';
import styled from 'styled-components';
import FixedBar from '../elements/FixedBar';
import Wrapper from '../elements/Wrapper';
import Icon from '../elements/Icon';

const Direction = styled.p`
  font-size: 24px;
  font-weight: 700;
  display: block;
  width: 100%;
`;

const Distance = styled.p`
  font-size: 20px;
  color: var(--color-primary-light);
  display: block;
  width: 100%;
`;

const Header = () => {
  return (
    <FixedBar top>
      <Wrapper column between>
        <Direction> Follow NE direction</Direction>
        <Distance>150m</Distance>
      </Wrapper>
    </FixedBar>
  );
};

export default Header;
