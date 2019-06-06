import styled from 'styled-components';

export default styled.div`
  height: 70px;
  position: fixed;
  top: ${props => (props.top ? 0 : null)};
  bottom: ${props => (props.bottom ? 0 : null)};
  left: 0;
  right: 0;
  z-index: 999;
  background-color: var(--color-background-translucent);
  backdrop-filter: blur(2px);
  line-height: 1.4;

  @media (max-width: 555px) {
    height: 60px;
  }
`;
