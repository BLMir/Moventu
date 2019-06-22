import React from 'react';
import Wrapper from '../elements/Wrapper';
import PageTitle from '../elements/PageTitle';
import HeaderBack from '../components/HeaderBack';

const About = () => (
  <div>
    <HeaderBack />
    <Wrapper between>
      <PageTitle>What dis?</PageTitle>
      <p>
        Moventu is born from the necessity to encourage people to GO OUT, making
        them feel the motivation to discover new locations, with indications of
        random and personal Routes.
      </p>
    </Wrapper>
  </div>
);

export default About;
