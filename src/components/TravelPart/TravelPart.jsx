import {
 
  Button,
  Right,
  Left,
  FlexContainer,
} from './TravelPart.styled';

import { useSelector } from 'react-redux';

import { getFilteredTravels } from 'redux/selectors';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { getTodayWeather } from 'redux/operations';
import { deleteTrip } from 'redux/travelSlice';
import TodayWeather from '../TodayWeather/TodayWeather';
import CreateTrip from '../CreateTrip/CreateTrip';
import { getWeekWeather } from '../../redux/operations';
import Weekweather from 'components/WeekWeather/Weekweather';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function TravelsList() {
  const travels = useSelector(getFilteredTravels);
  const [todayWeather, setTodatWeather] = useState({});
  const [city, setCity] = useState('');
  const [startDay, setStartDay] = useState('');
  const [endDay, setEndDay] = useState('');
  const [weekWeather, setWeekWeather] = useState('');

  const dispatch = useDispatch();

  const handleDelete = city => {
    dispatch(deleteTrip(city));
  };

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await dispatch(getTodayWeather(city));
        setTodatWeather(response.payload);
        const response2 = await dispatch(
          getWeekWeather({ city, startDay, endDay })
        );

        setWeekWeather(response2.payload);
      } catch (error) {
        console.error("Error fetching today's weather:", error);
      }
    };

    if (city) {
      fetchWeatherData();
     
    }
  }, [city, dispatch, startDay, endDay]);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,

    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div>
      <FlexContainer>
        <Left>
          {travels.length > 0 && (
            <div
              style={{
                height: '300px',
                marginBottom: '20px',
                width: '800px',
                overflow: 'hidden',
              }}
            >
              <Slider {...settings}>
                {travels.map(({ city, startDate, endDate, image, id }) => (
                  <div key={id}>
                    <div
                      onClick={() => {
                        setCity(city.toLowerCase().trim());
                        setStartDay(startDate.toString());
                        setEndDay(endDate.toString());
                      }}
                    >
                      <img
                        src={image}
                        width="230px"
                        height="170"
                        alt="image_city"
                      />
                      <p>{city}</p>
                      <p>{startDate}</p>
                      <p>{endDate}</p>
                    </div>
                    <Button onClick={() => handleDelete(city)}>Delete</Button>
                  </div>
                ))}
              </Slider>
            </div>
          )}
          <CreateTrip />
        </Left>

        <Right>
          <TodayWeather
            todayWeather={todayWeather}
            city={city}
            startDay={startDay}
          />
        </Right>
      </FlexContainer>

      <Weekweather weekWeather={weekWeather} />
    </div>
  );
}

export default TravelsList;
