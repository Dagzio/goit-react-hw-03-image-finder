import styled from "styled-components";

export const Searchbar = styled.header`
top: 0;
  left: 0;
  position: sticky;
  z-index: 1100;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 64px;
  padding:12px 24px;
  color: #fff;
  background-color: #3f51b5;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;


export const SearchInput = styled.input`
  width: 320px;
  height: 40px;
  margin-right: 10px;

&:focus {
  outline: none;
}
`;
