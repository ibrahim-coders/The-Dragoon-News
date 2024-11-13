import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100">
      <h1 className="text-5xl font-bold text-violet-600">Oops!</h1>
      <p className="mt-4 text-lg text-gray-700">Something went wrong.</p>
      <p className="mt-2 text-md text-gray-600">
        The page you are looking for does not exist.
      </p>
      <Link
        to="/"
        className="mt-6 px-6 py-2 text-white bg-violet-600 rounded hover:bg-blue-700 transition duration-200"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default ErrorPage;
