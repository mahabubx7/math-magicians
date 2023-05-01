import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import './page.css';

function RootPage() {
  return (
    <>
      <Header />

      <div className="page-container">
        <Outlet />
      </div>
    </>
  );
}

export default RootPage;
