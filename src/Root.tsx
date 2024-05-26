import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { App } from './App.tsx';
import { NotFoundPage } from './pages/NotFoundPage/NotFoundPage.tsx';
import { MainPage } from './pages/mainPage/MainPage.tsx';
import { LoginPage } from './pages/loginPage/LoginPage.tsx';
import { RegisterPage } from './pages/registerPage/RegisterPage.tsx';
import { ProductCatalog } from './pages/productCatalog/ProductCatalog.tsx';
import { Itempage } from './pages/itemPage/ItemPage.tsx';
import { WorkWithUs } from './pages/workWithUs/WorkWithUs.tsx';
import { Contacts } from './pages/contacts/Contacts.tsx';
import { CartPage } from './pages/cart/CartPage.tsx';

export const Root: React.FC = () => (
  <HashRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route index element={<MainPage />} />
        <Route path="signin" element={<LoginPage />} />
        <Route path="signup" element={<RegisterPage />} />

        <Route path="cakes">
          <Route index element={<ProductCatalog />} />
          <Route path=":cakeId" element={<Itempage />} />
        </Route>

        <Route path="bakery">
          <Route index element={<ProductCatalog />} />
          <Route path=":bakeId" element={<Itempage />} />
        </Route>

        <Route path="desserts">
          <Route index element={<ProductCatalog />} />
          <Route path=":dessertId" element={<Itempage />} />
        </Route>

        <Route path="workWithUs" element={<WorkWithUs />} />

        <Route path="contacts" element={<Contacts />} />

        <Route path="cart" element={<CartPage />} />
      </Route>

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  </HashRouter>
);