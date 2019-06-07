import React from 'react';
import styled from 'styled-components';

import { Link } from 'react-router-dom';
import Wrapper from '../elements/Wrapper';
import PageTitle from '../elements/PageTitle';
import Button from '../elements/Button';

const A = styled.p`
  display: block;
  width: 100%;
  text-align: left;
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 10px;
`;

const B = styled.p`
  display: block;
  width: 100%;
  text-align: left;
  font-size: 20px;
  font-weight: 400;
  margin-bottom: 30px;
`;

const C = styled(Button)`
  position: relative;
  bottom: -100px;
`;

function About() {
  return (
    <div>
      <Wrapper between>
        <PageTitle>Route details</PageTitle>
        <A>Distance</A>
        <B>5.2 km</B>
        <A>Time</A>
        <B>44 min</B>
        <A>Average speed</A>
        <B>3 km/h</B>
        <Link to="/">
          <C>ENOUGH</C>
        </Link>
      </Wrapper>
    </div>
  );
}

export default About;
