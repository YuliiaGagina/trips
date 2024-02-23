import styled from '@emotion/styled';

export const Title = styled.h2`
  margin-bottom: 15px;
  padding-top: 15px;
  padding-bottom: 15px;
  // margin-left: 50px;
`;

export const List = styled.div`
  //   display: flex;
  //   border-left: 1px solid grey;
  heigt: 650px;
  overflow: hidden;
`;

export const Item = styled.li`
  border-radius: 10px;
  background-color: #feee7f;
  padding: 10px;
  width: 240px;

  &:nth-of-type(2n) {
    background-color: #413941;
    color: white;
  }
`;

export const Button = styled.button`
  margin-top: 12px;
  width: 90px;
  padding: 10px;
  background-color: #c9e913;
  color: white;
  border-radius: 50%;
  :hover {
    background-color: #f1f692;
    color: #413941;
  }
`;

export const FlexContainer = styled.div`
  gap: 30px;
  display: flex;

  max-width: 100%; /* Додали цей стиль для забезпечення максимальної ширини */
`;

export const Left = styled.div`
  flex: 70%;
  display: flex;
`;
export const Right = styled.div`
  flex: 30%;
`;
