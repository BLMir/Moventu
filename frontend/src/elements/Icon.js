import styled from 'styled-components';

export default styled.div`
  height: 40px;
  width: 40px;
  color: var(--color-secondary);
  -webkit-tap-hightext-color: hsla(0, 0%, 0%, 0);
  -webkit-tap-hightext-color: transparent;

  @media (max-width: 822px) {
    height: 35px;
    width: 35px;
  }
`;
