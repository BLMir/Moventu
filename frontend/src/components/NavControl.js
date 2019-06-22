import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import FixedBar from '../elements/FixedBar';
import Wrapper from '../elements/Wrapper';
import Button from '../elements/Button';

const ButtonStop = styled(Button)`
  font-weight: 700;
  background-color: hsl(360, 81%, 45%);
  width: 10vw;
  height: 44px;
  color: var(--color-primary);

  @media (max-width: 555px) {
    width: 30vw;
  }
`;

const Number = styled.p`
  font-weight: 700;
  font-size: 26px;
`;

const Unit = styled.span`
  color: var(--color-primary-light);
  font-size: 17px;
  font-weight: 400;
`;

const NavControl = () => (
  <FixedBar bottom>
    <Wrapper row between>
      <Number>
        2.7 / 5 <Unit>km</Unit>
      </Number>
      <Number>
        32 <Unit>min</Unit>
      </Number>
      <Link to="/routedetails">
        <ButtonStop>End</ButtonStop>
      </Link>
    </Wrapper>
  </FixedBar>
);

export default NavControl;
