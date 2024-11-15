import { createBrowserRouter, Navigate } from 'react-router-dom';
import HomeLayout from '../layout/HomeLayout';
import ErrorPage from '../components/ErrorPage';
import CategoryNews from '../pages/CategoryNews';
import AuthLayout from '../components/layout-components/AuthLayout';
import Login from '../pages/Login';
import Register from '../pages/Register';
import NewsDetails from '../pages/NewsDetails';
import PrivateRoute from './PrivateRoute';

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
    path: '/news/:id',
    element: (
      <PrivateRoute>
        <NewsDetails />
      </PrivateRoute>
    ),
    loader: ({ params }) =>
      fetch(`https://openapi.programming-hero.com/api/news/${params.id}`),
  },

  {
    path: '/auth',
    element: <AuthLayout />,
    children: [
      {
        path: '/auth/login',
        element: <Login />,
      },
      {
        path: '/auth/register',
        element: <Register />,
      },
    ],
  },
]);

export default router;
