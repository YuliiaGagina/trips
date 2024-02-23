import React from 'react';

import clear from '../../assets/clear.png';
import rain from '../../assets/rain.png';
import cloudy from '../../assets/cloudy.png';
import { Wrap, Flexcontainer } from './WeekWeather.styled';

const Weekweather = ({ weekWeather }) => {
  const getWeatherIconUrl = description => {
    const weatherIcons = {
      'clear-day': clear,
      rain: rain,
      cloudy: cloudy,
      'partly-cloudy-day': cloudy,
      wind: cloudy,
      snow: rain,
    };

    return weatherIcons[description];
  };

  return (
    weekWeather && (
      <Wrap>
        {weekWeather.days.map(
          ({ datetime, tempmax, tempmin, icon, datetimeEpoch }, id) => (
            <oneDay style={{ marginBottom: '20px' }} key={id}>
              <p>
                {new Date(datetimeEpoch * 1000).toLocaleDateString('en-US', {
                  weekday: 'long',
                })}
              </p>
              <img
                width="100px"
                src={getWeatherIconUrl(icon)}
                alt="Weather Icon"
              />
              <Flexcontainer>
                {' '}
                <p>{Math.round(tempmax)}°C</p>/<p> {Math.round(tempmin)}°C</p>
              </Flexcontainer>
            </oneDay>
          )
        )}
      </Wrap>
    )
  );
};

export default Weekweather;
