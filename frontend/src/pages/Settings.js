import React from 'react';
import { Link } from 'react-router-dom';

import Wrapper from '../elements/Wrapper';
import PageTitle from '../elements/PageTitle';
import Alink from '../elements/Alink';
import FixedBar from '../elements/FixedBar';
import Icon from '../elements/Icon';

const Settings = () => (
  <>
    <FixedBar top>
      <Wrapper row between>
        <Alink>
          <Link to="/settings">
            <Icon />
          </Link>
        </Alink>
      </Wrapper>
    </FixedBar>
    <Wrapper between>
      <PageTitle>Settings</PageTitle>
      <p>dcjdkjfvjfknvjfdknvfjk </p>
    </Wrapper>
  </>
);

export default Settings;
