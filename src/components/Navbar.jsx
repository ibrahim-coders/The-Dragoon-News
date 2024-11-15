import { Link, NavLink } from 'react-router-dom';
import userIcon from '../assets/user.png';
import { AuthContext } from '../provider/AuthProvider';
import { useContext } from 'react';
const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  return (
    <div className="flex justify-between my-8 items-center">
      <div></div>
      <ul className="flex items-center gap-6 text-sm">
        <li>
          <NavLink
            to="/"
            className="text-gray-500 transition hover:text-gray-500/75 text-xl"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className="text-gray-500 transition text-xl hover:text-gray-500/75"
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/career"
            className="text-gray-500 transition text-xl hover:text-gray-500/75"
          >
            Career
          </NavLink>
        </li>
      </ul>
      <div className="flex gap-4 items-center">
        {user && user?.email ? (
          <div>
            <img src={user?.photoURL} alt="User" />
            <p className="text-violet-700">{user.displayName}</p>
          </div>
        ) : (
          <div>
            <img src={userIcon} alt="Default User Icon" />
          </div>
        )}

        {user && user?.email ? (
          <button
            onClick={logOut}
            // to="auth/login"
            className="btn py-2 px-6 rounded-md bg-gray-800 text-white  hover:text-black transition duration-300 ease-in-out"
          >
            Log-out
          </button>
        ) : (
          <Link
            to="auth/login"
            className="btn py-2 px-6 rounded-md bg-gray-800 text-white  hover:text-black transition duration-300 ease-in-out"
          >
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
