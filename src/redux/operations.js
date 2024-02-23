import { createAsyncThunk } from '@reduxjs/toolkit';

import axios from 'axios';

export const getCities = createAsyncThunk('cities/getAll', async () => {
  const response = await axios.get(
    'https://countriesnow.space/api/v0.1/countries/population/cities'
  );
  return response.data.data;
});

export const getTodayWeather = createAsyncThunk(
  'weatherfortoday/get',
  async city => {
    const response = await axios.get(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}/today?unitGroup=metric&include=days&key=7C5QL9W9WAUDJG7XB8EP9XYY6&contentType=json`
    );

    return response.data.days[0];
  }
);

export const getWeekWeather = createAsyncThunk(
  'weatherforweek/get',
  async ({ city, startDay, endDay }) => {
    const response = await axios.get(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}/${startDay}/${endDay}?unitGroup=metric&include=days&key=7C5QL9W9WAUDJG7XB8EP9XYY6&contentType=json`
    );

    return response.data;
  }
);
