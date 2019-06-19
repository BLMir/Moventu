import React from 'react';
import styled from 'styled-components';

import MapDirections from '../components/MapDirections';
import NavControl from '../components/NavControl';
import testmap from '../assets/testmap.png';

const Map = styled.img`
  position: fixed;
  top: 0px;
  left: -200px;
`;

function Home() {
  return (
    <>
      <MapDirections />
      <Map src={testmap} />
      <NavControl />
    </>
  );
}

export default Home;
