import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { addTravel } from '../../redux/travelSlice';

import {
  FormContainer,
  FormLabel,
  FormInput,
  ErrorMessage,
  SubmitButton,
} from './TravelForrm.styled';

const TravelForm = () => {
  const [selectedCity, setSelectedCity] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [image, setImage] = useState('');
  const cities = useSelector(state => state?.travels?.cities);
  const [errorMessage, setErrorMessage] = useState('');
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    if (selectedCity) {
      const photodata = async () => {
        try {
          const response = await axios.get(
            `https://pixabay.com/api/?q=${selectedCity}&page=1&key=32895691-46e81bd7531541cc66e325b33&image_type=photo&orientation=horizontal&per_page=3`
          );

          setImage(response.data.hits[0].largeImageURL);

          return response.data[0];
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      };
      photodata();
    }
  }, [selectedCity]);

  const handleCityChange = event => {
    setSelectedCity(event.target.value);
  };

  const handleStartDateChange = date => {
    setStartDate(date);
  };

  const handleEndDateChange = date => {
    setEndDate(date);
  };

  const maxDate = new Date();
  maxDate.setDate(maxDate.getDate() + 15);

  const handleSubmit = event => {
    event.preventDefault();
    if (!selectedCity || !startDate || !endDate) {
      setErrorMessage('All fields are required');
      return;
    }
    const dataTravel = { city: selectedCity, startDate, endDate, image };
    dispatch(addTravel(dataTravel));
    setSelectedCity('');
    setStartDate('');
    setEndDate('');
    setImage('');
    setIsFormSubmitted(true);
  };

  return (
    <>
      {!isFormSubmitted && (
        <FormContainer onSubmit={handleSubmit}>
          <FormLabel>
            Choose a city:
            <select value={selectedCity} onChange={handleCityChange}>
              <option value="">Select a city</option>
              {cities?.map(city => (
                <option key={city.id} value={city.city}>
                  {city.city}
                </option>
              ))}
            </select>
          </FormLabel>
          <br />
          <FormLabel>
            Start Date:
            <FormInput
              type="date"
              value={startDate}
              min={new Date().toISOString().split('T')[0]}
              max={`${maxDate.getFullYear()}-${(maxDate.getMonth() + 1)
                .toString()
                .padStart(2, '0')}-${maxDate
                .getDate()
                .toString()
                .padStart(2, '0')}`}
              onChange={e => handleStartDateChange(e.target.value)}
            />
          </FormLabel>
          <br />
          <FormLabel>
            End Date:
            <FormInput
              type="date"
              value={endDate}
              min={startDate}
              max={`${maxDate.getFullYear()}-${(maxDate.getMonth() + 1)
                .toString()
                .padStart(2, '0')}-${maxDate
                .getDate()
                .toString()
                .padStart(2, '0')}`}
              onChange={e => handleEndDateChange(e.target.value)}
            />
          </FormLabel>
          <br />
          {errorMessage && (
            <ErrorMessage style={{ color: 'red' }}>{errorMessage}</ErrorMessage>
          )}
          <SubmitButton type="submit">Submit</SubmitButton>
        </FormContainer>
      )}
      {isFormSubmitted && (
        <div>
          <p>Form submitted successfully!</p>
        </div>
      )}
    </>
  );
};

export default TravelForm;
