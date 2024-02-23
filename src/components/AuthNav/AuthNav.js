import { NavLink } from 'react-router-dom';

import { HeaderWrapper } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <HeaderWrapper>
      <ul>
        <li>
          <NavLink to="trips">My trips</NavLink>
        </li>
      </ul>
      <p> Welcome dear friend</p>
    </HeaderWrapper>
  );
};
