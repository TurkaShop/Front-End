import { Outlet } from 'react-router-dom';
import './App.scss';
import { Header } from './components/header/Header';
import { Footer } from './components/footer/Footer'; 

export const App = () => {
  return (
    <>
    {/* <Header /> */}
    <Outlet />
    {/* <Footer /> */}
  </>
  )
}
