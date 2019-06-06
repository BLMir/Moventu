import styled from 'styled-components';

export default styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 25vw;
  height: 50px;
  border-radius: 10px;
  background-color: var(--color-secondary);
  color: var(--color-primary);
  font-size: 22px;
  font-weight: 600;
  transition: background-color 0.1s linear;

  :hover {
    border: 3px solid var(--color-secondary);
    background-color: var(--color-background);
    color: var(--color-primary);
  }

  :active {
    border: 3px solid var(--color-secondary);
    background-color: var(--color-background);
    color: var(--color-primary);
  }

  @media (max-width: 555px) {
    width: 80vw;

    :hover {
      border: 3px solid var(--color-secondary);
      background-color: var(--color-secondary);
      color: var(--color-background);
    }

    :active {
      border: 3px solid var(--color-secondary);
      background-color: var(--color-background);
      color: var(--color-primary);
    }
  }
`;
