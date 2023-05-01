import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import CalculatorPage from './pages/Calculator';
import QuotePage from './pages/Quote';
import RootPage from './pages/Root';
import NotfoundPage from './pages/Notfound';
import HomePage from './pages/Home';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <RootPage />,
      errorElement: <NotfoundPage />,
      children: [
        {
          path: '/',
          element: <HomePage />,
        },
        {
          path: '/calculator',
          element: <CalculatorPage />,
        },
        {
          path: '/quote',
          element: <QuotePage />,
        },
      ],
    },
  ]);

  return (
    <RouterProvider router={router} />
  );
}

export default App;
