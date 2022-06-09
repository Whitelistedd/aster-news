import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Business } from './pages/Business/Business';
import { Gaming } from './pages/Gaming/Gaming';
import { Home } from './pages/Home/Home';
import { Login } from './pages/Login/Login';
import { Profile } from './pages/Profile/Profile';
import { Technology } from './pages/Technology/Technology';

export const App : React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/business" element={<Business />} />
        <Route path="/Gaming" element={<Gaming />}  />
        <Route path="/Technology" element={<Technology />}  />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}