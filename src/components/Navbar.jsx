import { Link, NavLink } from 'react-router-dom';
import userIcon from '../assets/user.png';
const Navbar = () => {
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
        <img src={userIcon} alt="" />
        <Link
          to="auth/login"
          className="btn py-2 px-6 rounded-md bg-gray-800 text-white  hover:text-black transition duration-300 ease-in-out"
        >
          Login
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
