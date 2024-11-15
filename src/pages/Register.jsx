import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../provider/AuthProvider';

const Register = () => {
  const [error, setError] = useState({});

  const { createNewUser, setUser, updataUserProfile } = useContext(AuthContext);
  const location = useLocation();
  console.log(location);
  const navigate = useNavigate();
  console.log(createNewUser);
  const handleRegisterSubmit = e => {
    e.preventDefault();
    const form = new FormData(e.target);
    const name = form.get('name');
    if (name.length < 5) {
      setError({ ...error, name: 'must be more then 5 character login' });
      return;
    }
    const photoUrl = form.get('photoUrl');
    const email = form.get('email');
    const password = form.get('password');
    console.log({ name, email, photoUrl, password });

    createNewUser(email, password)
      .then(result => {
        setUser(result.user);
        console.log(result.user);
        updataUserProfile({ displayName: name, photoURL: photo })
          .then(() => {
            navigate('/');
          })
          .catch(err => {
            console.log(err);
          });
        // navigate(location?.state ? location.state : '/');
      })
      .catch(error => {
        console.log('ERROR', error);
      });
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-lg">
        {/* Registration Form Heading */}
        <h2 className="text-2xl font-bold text-center text-gray-800">
          Register a New Account
        </h2>

        {/* Registration Form */}
        <form onSubmit={handleRegisterSubmit} className="space-y-4">
          {/* Name Field */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-600"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="w-full px-4 py-2 mt-1 border rounded-md text-gray-900 border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none"
            />
            {error.name && (
              <label
                htmlFor="name"
                className="block text-sm font-medium text-rose-600"
              >
                {error.name}
              </label>
            )}
          </div>

          {/* Photo URL Field */}
          <div>
            <label
              htmlFor="photoUrl"
              className="block text-sm font-medium text-gray-600"
            >
              Photo URL
            </label>
            <input
              type="url"
              id="photoUrl"
              name="photoUrl"
              required
              className="w-full px-4 py-2 mt-1 border rounded-md text-gray-900 border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none"
            />
          </div>
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
              htmlFor="regPassword"
              className="block text-sm font-medium text-gray-600"
            >
              Password
            </label>
            <input
              type="password"
              id="regPassword"
              name="password"
              required
              className="w-full px-4 py-2 mt-1 border rounded-md text-gray-900 border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none"
            />
          </div>

          {/* Confirm Password Field */}
          {/* <div>
            <label
              htmlFor="PasswordConfirmation"
              className="block text-sm font-medium text-gray-600"
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="PasswordConfirmation"
              name="password_confirmation"
              required
              className="w-full px-4 py-2 mt-1 border rounded-md text-gray-900 border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none"
            />
          </div> */}
          <div className="flex gap-2 justify-start items-center">
            <input
              type="checkbox"
              id="MarketingAccept"
              name="marketing_accept"
              className="size-4 rounded-md border-gray-200 bg-white shadow-sm"
            />
            <p className="text-sm text-center text-gray-600">
              Accept Term & Conditions
            </p>
          </div>
          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-2 mt-4 font-semibold text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Register
          </button>
        </form>

        {/* Already have an account */}
        <p className="mt-4 text-sm text-gray-500 text-center">
          Already have an account?
          <Link
            to="/auth/login"
            className="font-semibold text-blue-500 hover:text-blue-600"
          >
            Log in
          </Link>
          .
        </p>
      </div>
    </div>
  );
};

export default Register;
