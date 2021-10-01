import styled from 'styled-components';

export const Wrapper = styled.div`
  min-width: 220px;
  position: relative;
  box-shadow: 1px 1px 4px rgb(0 0 0 / 25%);
  border-radius: 5px;
  margin: 0 2em 0 0;
`;
export const Header = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  padding: 0 0.5em;
`;
export const WrapperChildren = styled.div`
width: 220px;
  position: absolute;
  box-shadow: 1px 1px 4px rgb(0 0 0 / 25%);
  border-radius: 5px;
  max-height: 235px;
  background-color: #ffffff;
  z-index: 9;
  overflow-y: auto;
  overflow-x: hidden;
`;

export const WrapperItem = styled.div`
  width: 220px;
  height: 30px;
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 0 0.5em;
  &:hover{
    background-color: lightgray;
  }
`;

export const HeaderTitle = styled.p`
  font-size: 1em;
  font-weight: 400;
  margin-right: 0.5em;
`;

export const Title = styled.h4`
  font-size: 1em;
  font-weight: 400;
  margin-block-start: 0em;
  margin-block-end: 0em;
`;

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const Input = styled.input`
  height: 30px;
  width: 100%;
  margin: 0 0.5em 1em;
  padding: 0 0.5em;
  border: 1px solid lightgray;
  border-radius: 5px;
`;
