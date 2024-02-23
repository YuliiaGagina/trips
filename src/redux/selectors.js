import { createSelector } from '@reduxjs/toolkit';

export const getTravels = state => state.travels.travels;
export const getFilter = state => state.filter.value;

export const getFilteredTravels = createSelector(
  [getTravels, getFilter],

  (travels, filter) => {
    return travels.filter(travel =>
      travel.city.toLowerCase().includes(filter.toLowerCase())
    );
  }
);

export const getIsloading = state => state.contacts.isLoading;
