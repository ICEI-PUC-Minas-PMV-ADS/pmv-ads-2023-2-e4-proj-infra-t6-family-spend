import { createBrowserRouter } from 'react-router-dom';
import Home from './pages/home';
import Spending from './pages/Spending';

const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
    },
    {
      path: "/spending",
      element: <Spending/>,
    },
  ]
);

export default router;