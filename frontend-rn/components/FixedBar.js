import { View } from 'react-native';
import styled from 'styled-components';

import { theme } from '../constants';

export default styled.View`
  flex: 1;
  width: 100%;
  justify-content: ${props => (props.left ? 'flex-start' : 'space-between')};
  flex-direction: ${props => (props.row ? 'row' : 'column')};
  align-items: ${props => (props.center ? 'center' : 'stretch')};
  height: 70;
  padding-top: ${theme.space.xs};
  padding-bottom: ${theme.space.xs};
  padding-right: ${theme.space.xs};
  padding-left: ${theme.space.xs};
  position: absolute;
  top: ${props => (props.top ? 0 : 'auto')};
  bottom: ${props => (props.bottom ? 0 : 'auto')};
  left: 0;
  right: 0;
  z-index: 999;
  background-color: ${theme.color.translucent};
`;
