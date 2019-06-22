import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Wrapper from '../elements/Wrapper';
import PageTitle from '../elements/PageTitle';
import Button from '../elements/Button';
import Alink from '../elements/Alink';

const Logo = styled(PageTitle)`
  font-weight: 700;
  font-size: 60px;
  letter-spacing: -2px;
  text-align: center;
  margin-bottom: 30px;
`;

const Slogan = styled.h2`
  font-size: 22px;
  font-weight: 400;
  margin-bottom: 140px;
`;

const ButtonLayout = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-bottom: 40px;
`;

const AlinkLayout = styled.div`
  font-size: 18px;
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 100px;
`;

function Welcome() {
  return (
    <Wrapper>
      <Logo>Moventu</Logo>
      <Slogan>Get lost. A bit.</Slogan>
      <ButtonLayout>
        <Link to="/setroute">
          <Button>GET STARTED</Button>
        </Link>
      </ButtonLayout>
      <AlinkLayout>
        <Link to="/about">
          <Alink>Learn more</Alink>
        </Link>
      </AlinkLayout>
    </Wrapper>
  );
}

export default Welcome;
