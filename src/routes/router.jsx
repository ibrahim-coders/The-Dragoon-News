import { createBrowserRouter, Navigate } from 'react-router-dom';
import HomeLayout from '../layout/HomeLayout';
import ErrorPage from '../components/ErrorPage';
import CategoryNews from '../pages/CategoryNews';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '',
        element: <Navigate to={'/categroy/01'}></Navigate>,
      },
      {
        path: '/categroy/:id',
        element: <CategoryNews />,
        loader: ({ params }) =>
          fetch(
            `https://openapi.programming-hero.com/api/news/category/${params.id}`
          ),
      },
    ],
  },
  {
    path: '/news',
    element: <h1>news layout</h1>,
  },
  {
    path: '/auth',
    element: <h1>login layout</h1>,
  },
]);

export default router;
