import { Outlet } from 'react-router-dom';
import Header from '../components/Header';

function RootPage() {
  return (
    <>
      <Header />

      <div className="page">
        <Outlet />
      </div>
    </>
  );
}

export default RootPage;
