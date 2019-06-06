import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Wrapper from '../elements/Wrapper';
import PageTitle from '../elements/PageTitle';
import Button from '../elements/Button';
import Alink from '../elements/Alink';

const Intro = styled(PageTitle)`
  font-weight: 900;
  font-size: 80px;
  text-align: center;
  margin-bottom: 90px;

  @media (max-width: 555px) {
    font-size: 62px;
    text-align: left;
    margin-bottom: 70px;
  }

  @media (max-width: 333px) {
    font-size: 50px;
  }
`;

const Description = styled.h2`
  font-size: 24px;
  font-weight: 400;
  margin-bottom: 70px;

  @media (max-width: 555px) {
    font-size: 20px;
    margin-bottom: 60px;
  }
`;

const Layout = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-bottom: 40px;
`;

const Layout2 = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 40px;
`;

function Welcome() {
  return (
    <Wrapper>
      <Intro>MOVENTU</Intro>
      <Description>Get lost. A bit.</Description>
      <Layout>
        <Link to="/setroute">
          <Button>Get started</Button>
        </Link>
      </Layout>
      <Layout2>
        <Link to="/about">
          <Alink>Learn more</Alink>
        </Link>
      </Layout2>
    </Wrapper>
  );
}

export default Welcome;
