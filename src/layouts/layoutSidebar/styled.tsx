import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  margin-bottom: 2em;
  @media (min-width: 1200px) {
    margin: 0 2em 0 0;
    flex-direction: column;
    width: 220px;
    max-height: 972px;
  }
`;

export const Sidebar = styled.div`
  width: 100%;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  padding: 0 1em;
  @media (min-width: 1200px) {
    width: calc(220px - 2em);
    margin: 2em 0 0 0;
    flex-direction: column;
    height: 100%;
  }
`;
