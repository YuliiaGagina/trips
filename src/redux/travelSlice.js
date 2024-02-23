import { createSlice } from '@reduxjs/toolkit';
import {
 
  getCities,
} from './operations';

const initialState = {
  cities: [],
  travels: [],
  isLoading: false,
  error: null,
  todayWeather: [],
};

const travelSlice = createSlice({
  name: 'travels',

  initialState: initialState,
  reducers: {
    addTravel: (state, action) => {
      state.travels.push(action.payload);
    },
    deleteTrip: (state, action) => {
      console.log(action);
      state.travels = state.travels.filter(
        item => item.city !== action.payload
      );
    },
  },

  extraReducers: builder =>
    builder.addCase(getCities.fulfilled, (state, { payload }) => {
      state.isLoading = false;
      state.cities = [...payload];
    }),
 
});
export const { addTravel, deleteTrip } = travelSlice.actions;
export const tarvelReducer = travelSlice.reducer;
