import { Link, Outlet } from 'react-router-dom';
import Navbar from '../components/UA/Navbar/Navbar';

export const MainPage = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  )
}