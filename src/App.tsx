//import { Outlet } from 'react-router-dom';
import './App.scss';
//import { Header } from './components/header/Header';
import { Footer } from './components/footer/Footer'; 
import { MainPage } from './pages/mainPage/MainPage';

export const App = () => {
  return (
    <>
    <MainPage/>
    {/* <Header />
    <Outlet /> */}
    <Footer/>
  </>
  )
}
