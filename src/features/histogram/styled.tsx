import styled, { keyframes } from 'styled-components';

export const Wrapper = styled.div``;

export const Title = styled.p`
  font-size: 1em;
`;

const rotate = keyframes`
    0%{transform: rotate(0deg);}
    100%{transform: rotate(-360deg);}
`;

const rotateOpp = keyframes`
    0%{transform: rotate(0deg);}
    100%{transform: rotate(360deg);}
`;

export const LoaderWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
    justify-content: center;
    align-items: center;
`;
export const Loader = styled.div`
  position: relative;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: 7px solid transparent;
  border-top: 7px solid rgba(27, 152, 224, 0.2);
  border-bottom: 7px solid rgba(27, 152, 224, 0.2);
  opacity: 0.8;
  animation: ${rotateOpp} 1.8s linear infinite;
  &:after {
    content: '';
    position: absolute;
    width: 28px;
    height: 28px;
    border-radius: 50%;
    border: 6px solid transparent;
    border-left: 6px solid rgb(0, 100, 148);
    border-right: 6px solid rgb(0, 100, 148);
    opacity: 0.9;
    animation: ${rotate} 0.9s linear infinite;
  }
`;
