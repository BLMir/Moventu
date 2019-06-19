import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import FixedBar from '../elements/FixedBar';
import Wrapper from '../elements/Wrapper';

import ArrowBack from '../icons/arrow-back.svg';

const Icon = styled.img`
  height: 28px;
  width: 28px;
`;

function Header() {
  return (
    <FixedBar top>
      <Wrapper row between>
        <Link to="/">
          <Icon src={ArrowBack} alt="Back" />
        </Link>
      </Wrapper>
    </FixedBar>
  );
}

export default Header;
