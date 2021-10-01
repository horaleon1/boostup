import styled from 'styled-components';

export const Wrapper = styled.div``;

export const Title = styled.p`
  font-size: 1em;
`;

export const TitleItem = styled.span`
  font-size: 0.83em;
  font-weight: 400;
  padding-left: 0.5em;
`;

export const Skeleton = styled.div`
  width: 180px;
  height: 20px;
  margin-bottom: 1em;
  border-radius: 9px;
  background-color: #dad8d6;
  animation: loading 1s infinite;
  @keyframes loading {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0.5;
    }
    100% {
      opacity: 1;
    }
  }
`;
