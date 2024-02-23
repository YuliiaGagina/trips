import { NavLink } from 'react-router-dom';

import { HeaderWrapper } from './UserMenu.styled';
export const UserMenu = () => {
  return (
    <HeaderWrapper>
      <div>
        <NavLink to="/">Home</NavLink>
      </div>
    </HeaderWrapper>
  );
};
