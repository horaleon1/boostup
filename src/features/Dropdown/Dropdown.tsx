import { useState } from 'react';
import {
  Header,
  HeaderTitle,
  Input,
  InputWrapper,
  Title,
  Wrapper,
  WrapperChildren,
  WrapperItem,
} from './styled';
import ArrowDown from './ArrowDown';
import { setStateDropdown } from '../histogram/histogramSlice';
import { useAppDispatch } from '../../app/hooks';
import { regions } from '../../helpers/regions';

interface IItem {
  name: string;
  onClick: () => void;
}

export const DropdownItem = ({ name, onClick }: IItem) => {
  return (
    <WrapperItem onClick={onClick}>
      <Title>{name}</Title>
    </WrapperItem>
  );
};

export const Dropdown = () => {
  const dispatch = useAppDispatch();
  const defaultState = regions[0] ?? '';

  const [dropdownName, setDropdownName] = useState(defaultState);
  const [isOpen, setOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [dropdownData, setDropdownData] = useState(regions);

  const toggle = () => setOpen((prevState) => !prevState);

  const onHandleClick = (value: string) => {
    setDropdownName(value);
    dispatch(setStateDropdown(value));
    toggle();
    setInputValue('');
    setDropdownData(regions);
  };

  const onChange = (e: any) => {
    const { value } = e.target;

      setInputValue(value);
      setOpen(true);
      const filter = dropdownData.filter((item) =>
        item.toLowerCase().includes(value.toLowerCase())
      );
      setDropdownData(filter);
  };

  const onReset = (e: any) => {
    if (e.key === 'Backspace') {
      setDropdownData(regions);
    }
  };
console.log(inputValue, 'inputValue');
  return (
    <Wrapper>
      <Header onClick={toggle}>
        <HeaderTitle>{dropdownName}</HeaderTitle>
        {!inputValue && <ArrowDown />}
      </Header>
      <InputWrapper>
        <Input
          type='text'
          placeholder='Search State'
          onChange={(e) => onChange(e)}
          onKeyDown={(e) => onReset(e)}
          onFocus={() => setOpen(false)}
          value={inputValue}
        />
      </InputWrapper>
      {isOpen && (
        <WrapperChildren>
          {dropdownData.map((item) => (
            <DropdownItem
              key={item}
              name={item}
              onClick={() => onHandleClick(item)}
            />
          ))}
        </WrapperChildren>
      )}
    </Wrapper>
  );
};
