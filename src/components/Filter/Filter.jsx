import { Wrapper, Input } from './Filrer.styled';
import { useDispatch } from 'react-redux';
import { addFilter } from 'redux/filterSlice';
function Filter() {
  const dispatch = useDispatch();
  return (
    <Wrapper>
      <Input
        placeholder="City"
        type="text"
        name="filter"
        onChange={event => dispatch(addFilter(event?.target?.value))}
      />
    </Wrapper>
  );
}

export default Filter;
