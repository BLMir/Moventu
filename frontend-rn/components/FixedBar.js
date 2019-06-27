import { View } from 'react-native';
import styled from 'styled-components';

import { theme } from '../constants';

export default styled.View`
  flex: 1;
  width: 100%;
  align-items: ${props => (props.left ? 'left' : 'center')};;
  flex-direction: ${props => (props.row ? 'row' : 'column')};
  height: 60;
  position: absolute;
  top: ${props => (props.top ? 0 : null)};
  bottom: ${props => (props.bottom ? 0 : null)};
  left: 0;
  right: 0;
  z-index: 999;
  background-color: ${theme.color.translucent};
`;
