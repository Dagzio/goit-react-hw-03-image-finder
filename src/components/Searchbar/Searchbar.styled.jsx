import styled from 'styled-components';

export const Header = styled.header`
  top: 0;
  left: 0;
  position: sticky;
  z-index: 1100;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 64px;
  color: #fff;
  background-color: #3f51b5;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

export const SearchInput = styled.input`
  width: 320px;
  height: 32px;
  margin-right: 10px;
  border-radius: 10px;
  border: none;
  padding: 8px 10px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 4px -1px,
    rgba(0, 0, 0, 0.14) 0px 4px 5px 0px, rgba(0, 0, 0, 0.12) 0px 1px 10px 0px;

  &:focus {
    outline: none;
  }
`;

export const SearchButton = styled.button`
  width: 80px;
  height: 32px;
  border: transparent;
  cursor: pointer;
  border-radius: 16px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 4px -1px,
    rgba(0, 0, 0, 0.14) 0px 4px 5px 0px, rgba(0, 0, 0, 0.12) 0px 1px 10px 0px;

  &:active {
    box-shadow: inset 2px 2px 5px 0px rgba(0, 0, 0, 0.5);
    background-color: grey;
  }
`;
