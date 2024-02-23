import { Outlet } from 'react-router-dom';

import { AuthNav } from 'components/AuthNav/AuthNav';

export const Navbar = () => {
  return (
    <div>
      {<AuthNav />}
     
      <Outlet />
    </div>
  );
};
