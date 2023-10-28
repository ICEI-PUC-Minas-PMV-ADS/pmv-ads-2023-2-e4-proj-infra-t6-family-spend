import { createBrowserRouter } from 'react-router-dom';
import Home from './pages/home';
import Spending from './pages/Spending';
import NewFamilyMember from './pages/NewFamilyMember';
import NewSpend from './pages/NewSpend';

const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
    },
    {
      path: "/spending",
      element: <Spending/>,
    },
    {
      path: "/CreateFamilyMember",
      element: <NewFamilyMember/>,
    },
    {
      path: "/NewSpend",
      element: <NewSpend/>,
    },
  ]
);

export default router;