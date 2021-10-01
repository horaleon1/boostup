import styled from 'styled-components';

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-bottom: 2em;
  @media (min-width: 1200px) {
    flex-direction: row;
  }
`;
