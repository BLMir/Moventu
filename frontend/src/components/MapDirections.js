import React from 'react';
import styled from 'styled-components';

import FixedBar from '../elements/FixedBar';
import Wrapper from '../elements/Wrapper';

const Direction = styled.p`
  font-size: 24px;
  font-weight: 700;
  display: block;
  width: 100%;
  line-height: 1.55;
`;

const Distance = styled.p`
  font-size: 20px;
  color: var(--color-primary-light);
  display: block;
  width: 100%;
`;

const MapDirection = () => (
  <FixedBar top>
    <Wrapper column>
      <Direction>Follow NE direction</Direction>
      <Distance>150m</Distance>
    </Wrapper>
  </FixedBar>
);

export default MapDirection;
