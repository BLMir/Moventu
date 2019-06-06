import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Wrapper from '../elements/Wrapper';
import Button from '../elements/Button';

const WrapperWithPaddingBottom = styled(Wrapper)`
  padding-bottom: 200px;
`;

const Question = styled.p`
  font-weight: 700;
  margin-bottom: 3vh;
`;

const Input = styled.input`
  margin-bottom: 5vh;
`;

function Home() {
  return (
    <WrapperWithPaddingBottom>
      <Question>How many km?</Question>
      <Input />
      <Link to="/maproute">
        <Button>START</Button>
      </Link>
    </WrapperWithPaddingBottom>
  );
}

export default Home;
