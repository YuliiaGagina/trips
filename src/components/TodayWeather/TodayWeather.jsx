import React from 'react';

import {
  WeatherContaiter,
  FlexCont,
  FlexCol,
  Figure,
} from './TodayWeather.styled';

import clear from '../../assets/clear.png';
import rain from '../../assets/rain.png';
import cloudy from '../../assets/cloudy.png';

const TodayWeather = ({ todayWeather, city, startDay }) => {
  if (!todayWeather || !todayWeather.datetimeEpoch) {
    return null;
  }
  const date = new Date(todayWeather.datetimeEpoch * 1000);

  const dayOfWeek = date.toLocaleDateString('en-US', { weekday: 'long' });

  const currentDate = new Date();

  const tripStartDate = new Date(startDay);

  const difference = tripStartDate - currentDate;

  const days = Math.floor(difference / (1000 * 60 * 60 * 24));
  const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((difference / (1000 * 60)) % 60);
  const seconds = Math.floor((difference / 1000) % 60);


  const getWeatherIconUrl = description => {
    const weatherIcons = {
      'clear-day': clear,
      rain: rain,
      cloudy: cloudy,
      'partly-cloudy-day': cloudy,
    };

  
    return weatherIcons[description];
  };

  return (
    todayWeather && (
      <WeatherContaiter>
        <p>{dayOfWeek}</p>
        <img
          width="100px"
          src={getWeatherIconUrl(todayWeather.icon)}
          alt="Weather Icon"
        />
        <p>{Math.round(todayWeather.temp)}°C</p>
        <p>{city.toUpperCase()}</p>
        <FlexCont>
          <FlexCol>
            <Figure>{days}</Figure>
            <span>днів</span>
          </FlexCol>
          <FlexCol>
            {' '}
            <Figure>{hours}</Figure> <span>годин</span>
          </FlexCol>
          <FlexCol>
            <Figure>{minutes} </Figure> <span> хвилин</span>{' '}
          </FlexCol>
          <FlexCol>
            {' '}
            <Figure>{seconds} </Figure> <span>секунд</span>
          </FlexCol>
        </FlexCont>
      </WeatherContaiter>
    )
  );
};

export default TodayWeather;
