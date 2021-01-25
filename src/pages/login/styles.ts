import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  position: fixed;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  & img {
    display: block;
    margin: auto;
  }
  & input[type='text'],
  input[type='password'] {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    box-sizing: border-box;
  }
  & input[type='text']:disabled {
    background: black;
  }
  & button {
    background-color: #4caf50;
    color: white;
    padding: 14px 20px;
    margin: 8px 0;
    border: none;
    cursor: pointer;
    width: 100%;
  }
  & button:disabled,
  button[disabled] {
    background-color: #cccccc;
    color: #666666;
  }
`;
