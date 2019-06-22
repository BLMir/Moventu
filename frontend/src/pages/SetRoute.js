import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import PageTitle from '../elements/PageTitle';
import Wrapper from '../elements/Wrapper';
import Button from '../elements/Button';

const Question = styled.p`
  font-weight: 700;
  margin-bottom: 3vh;
`;

const Input = styled.input`
  margin-bottom: 5vh;
  color: var(--color-background);
  text-align: center;
  border-radius: 4px;
`;

const A = styled(Button)`
  margin-top: 50px;
`;

const SetRoute = () => (
  <Wrapper>
    <PageTitle>Set route</PageTitle>
    <Question>How many km?</Question>
    <Input type="number" inputmode="decimal" />
    <Link to="/maproute">
      <A>START</A>
    </Link>
  </Wrapper>
);

export default SetRoute;
