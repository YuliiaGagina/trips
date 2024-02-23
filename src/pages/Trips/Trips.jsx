import Filter from '../../components/Filter/Filter';

import { Wrapper, FilterWrap } from './Trips.styled';

import { useDispatch } from 'react-redux';

import { useEffect } from 'react';

import TravelPart from '../../components/TravelPart/TravelPart';
import { getCities } from '../../redux/operations';

export function Trips() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCities());
  }, [dispatch]);

  return (
    <>
      <Wrapper>
        <FilterWrap>
          <Filter />
          <TravelPart />
        </FilterWrap>
      </Wrapper>
    </>
  );
}
