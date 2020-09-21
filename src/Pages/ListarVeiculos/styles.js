import styled from 'styled-components';

export const hr = styled.div`
  border: 10px;
`;

export const Container = styled.div`
  max-width: 700px;
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 1);
  padding: 30px;
  margin: 80px auto;
  h1 {
    font-size: 20px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }
  h4 {
    font-size: 14px;
    font-family: 'Courier New', Courier, monospace;
  }
  svg {
    margin-right: 10px;
  }
`;

export const List = styled.div`
  list-style: none;
  margin-top: 30px;

  li,
  div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const Button = styled.button`
  background: '#FFF';
  border: 0;
  border-radius: 4px;
  display: flex;
  margin: 10px;
  flex: 1;
  align-items: center;
  justify-content: center;
`;
