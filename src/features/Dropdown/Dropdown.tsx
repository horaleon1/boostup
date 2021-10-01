import {
  ChangeEvent,
  KeyboardEvent,
  useCallback,
  useEffect,
  useState,
  useRef,
} from 'react';
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
import { setStateDropdown } from '../histogram/histogramSlice';
import { useAppDispatch } from '../../app/hooks';
import { regions } from '../../helpers/regions';
import ArrowDown from './ArrowDown';

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
  // For header or selected item 
  const defaultState = regions[0] ?? '';

  const [dropdownName, setDropdownName] = useState(defaultState);
  const [isOpen, setOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [dropdownData, setDropdownData] = useState(regions);
  // Control open and close dropdown action
  const toggle = () => setOpen((prevState) => !prevState);

  const ref = useRef<HTMLDivElement>(null);
  // Check when user clicks outside of the dropdown area and close it.
  const onClickOutside = useCallback(
    (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as HTMLElement)) {
        setOpen(false);
      }
    },
    [setOpen]
  );

  useEffect(() => {
    if (ref.current) {
      window.addEventListener('mousedown', onClickOutside);
    }
    return () => {
      window.removeEventListener('mousedown', onClickOutside);
    };
  });

  const onHandleClick = (value: string) => {
    setDropdownName(value);
    dispatch(setStateDropdown(value));
    toggle();
    setInputValue('');
    setDropdownData(regions);
  };

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const lowerCaseValue = (e.target as HTMLInputElement).value.toLowerCase();

    setInputValue((e.target as HTMLInputElement).value);
    setOpen(true);
    const filter = dropdownData.filter((item) =>
      item.toLowerCase().includes(lowerCaseValue)
    );
    setDropdownData(filter);
  };
  // Regresh list suggestions
  const onReset = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace') {
      setDropdownData(regions);
    }
  };

  return (
    <Wrapper ref={ref}>
      <Header onClick={toggle}>
        <HeaderTitle>{dropdownName}</HeaderTitle>
        {!inputValue && <ArrowDown />}
      </Header>
      <InputWrapper>
        <Input
          type='text'
          placeholder='Search State'
          onChange={(e: ChangeEvent<HTMLInputElement>) => onChange(e)}
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
