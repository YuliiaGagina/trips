import styled from '@emotion/styled';

export const Wrapper = styled.section`
  padding: 30px;

  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    width: 100%;
    padding: 30px;

    display: flex;
    flex-direction: row;
  }
`;
export const FilterWrap = styled.div`
  padding-top: 30px;
  padding-left: 30px;
  @media (min-width: 768px) {
    padding: 0;
  }
`;
