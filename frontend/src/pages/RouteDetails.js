import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import Wrapper from '../elements/Wrapper';
import PageTitle from '../elements/PageTitle';
import Button from '../elements/Button';

const Unit = styled.p`
  display: block;
  width: 100%;
  text-align: left;
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 10px;
`;

const Number = styled.p`
  display: block;
  width: 100%;
  text-align: left;
  font-size: 20px;
  font-weight: 400;
  margin-bottom: 30px;
`;

const ButtonWithMargin = styled(Button)`
  margin-top: 50px;
`;

function About() {
  return (
    <>
      <Wrapper between>
        <PageTitle>Route details</PageTitle>
        <Unit>Distance</Unit>
        <Number>5.2 km</Number>
        <Unit>Time</Unit>
        <Number>44 min</Number>
        <Unit>Average speed</Unit>
        <Number>3 km/h</Number>
        <Link to="/">
          <ButtonWithMargin>ENOUGH</ButtonWithMargin>
        </Link>
      </Wrapper>
    </>
  );
}

export default About;
