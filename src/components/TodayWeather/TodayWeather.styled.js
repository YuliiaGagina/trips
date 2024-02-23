import styled from '@emotion/styled';
import banner from '../../assets/weather.jpg';

export const WeatherContaiter = styled.div`
  background: url(${banner});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  background-color: #325a97;
  padding: 10px;
  gap: 30px;

  width: 300px;
  height: 400px;
  display: flex;

  flex-direction: column;
  align-items: center;
  color: white;
`;

export const FlexCont = styled.div`
  display: flex;
  gap: 20px;
`;

export const FlexCol = styled.p`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
`;

export const Figure = styled.span`
  font-size: 24px;
  font-weigh: 700;
`;
