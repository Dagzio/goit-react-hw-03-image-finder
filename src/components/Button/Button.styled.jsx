import styled from 'styled-components';

export const LoadMoreBtn = styled.button`
  width: 132px;
  height: 36px;
  padding: 4px 8px;
  font-weight: 600;
  font-size: 16px;
  border: transparent;
  border-radius: 16px;
  background-color: #3f51b5;
  color: #ffffff;
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 4px -1px,
    rgba(0, 0, 0, 0.14) 0px 4px 5px 0px, rgba(0, 0, 0, 0.12) 0px 1px 10px 0px;

  &:hover {
    background-color: #364599;
    color: #e6e6e6;
  }

  &:active {
    box-shadow: inset 2px 2px 5px 0px rgba(0, 0, 0, 0.5);
  }
`;
