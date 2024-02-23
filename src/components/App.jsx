import { Route, Routes } from 'react-router-dom';
import { Navbar } from './Navbar/Navbar';
import { Trips } from 'pages/Trips/Trips';

import { Home } from './Home/Home';

export function App() {
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index element={<Home />} />

        <Route path="/trips" element={<Trips />} />
      </Route>
    </Routes>
  );
}
