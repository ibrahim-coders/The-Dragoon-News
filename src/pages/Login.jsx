import { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';

import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';

const Login = () => {
  const [error, setError] = useState({});
  const { userLogin, setUser } = useContext(AuthContext);
  const location = useLocation();
  console.log(location);
  const navigate = useNavigate();
  const handleSubmit = e => {
    e.preventDefault();

    const form = new FormData(e.target);

    const email = form.get('email');
    const password = form.get('password');
    console.log({ email, password });
    userLogin(email, password)
      .then(result => {
        const user = result.user;
        setUser(user);
        toast.success('Login successful!');
        navigate(location?.state ? location.state : '/');
      })
      .catch(err => {
        setError({ ...error, login: err.code });
      });
  };

  return (
    <div className="flex  items-center justify-center min-h-screen bg-gray-100 ">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-lg ">
        {/* Login Form Heading */}
        <h2 className="text-2xl font-bold text-center text-gray-800">
          Login to Your Account
        </h2>

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Email Field */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-600"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full px-4 py-2 mt-1 text-gray-900 border rounded-md border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none"
            />
          </div>

          {/* Password Field */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-600"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              required
              className="w-full px-4 py-2 mt-1 text-gray-900 border rounded-md border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none"
            />
            {error.login && (
              <label
                htmlFor="password"
                className="block text-sm font-medium text-rose-600"
              >
                {error.login}
              </label>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-2 mt-4 font-semibold text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Login
          </button>
        </form>
        {/* Register Link */}
        <p className="text-sm text-center text-gray-600">
          Don't have an account?{' '}
          <Link
            to="/auth/register"
            className="font-semibold text-blue-500 hover:text-blue-600"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
