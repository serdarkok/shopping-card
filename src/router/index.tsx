import { createBrowserRouter } from 'react-router-dom';
import HomePage from '../pages/Homepage';
import NotFound from '../pages/404';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: HomePage
  },
  {
    path: '*',
    Component: NotFound,
  }
])
