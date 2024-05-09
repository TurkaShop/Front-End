import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { App } from './App.tsx';

export const Root: React.FC = () => (
  <HashRouter>
    <Routes>
      <Route path="/" element={<App />}>
        {/* <Route index element={<Landing />} />
        <Route path="signin" element={<LoginPage />} />
        <Route path="signup" element={<RegisterPage />} />

        <Route path="main-page">
          <Route index element={<CatalogPage />} />
          <Route path=":itemId" element={<MainPage />} />
        </Route>

        <Route path="diet" element={<DietPage />} />

        <Route path="about-us" element={<AboutUs />} /> */}
      </Route>

      {/* <Route path="*" element={<NotFoundPage />} /> */}
    </Routes>
  </HashRouter>
);