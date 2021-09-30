import styled from 'styled-components';

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  @media (min-width: 1000px) {
    flex-direction: row;
  }
`;
