import { Outlet } from 'react-router-dom';
import './App.scss';
import { Footer } from './components/footer/Footer'; 
import { Header } from './components/header/Header';

export const App = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}
