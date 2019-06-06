import styled from 'styled-components';

export default styled.div`
  display: flex;
  flex-direction: ${props => (props.row ? 'row' : 'column')};
  align-items: center;
  justify-content: ${props => (props.between ? 'space-between' : 'center')};
  height: 100%;
  max-width: 822px;
  margin-left: auto;
  margin-right: auto;
  padding-left: var(--padding-global);
  padding-right: var(--padding-global);
`;
