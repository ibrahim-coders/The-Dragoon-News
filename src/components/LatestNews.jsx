import React from 'react';
import Marquee from 'react-fast-marquee';
import { Link } from 'react-router-dom';

const LatestNews = () => {
  return (
    <div className="flex bg-gray-200 p-2 rounded-sm items-center">
      <button className="bg-red-600 text-base-400 px-4 py-2 rounded-md text-white">
        Latest
      </button>

      <Marquee pauseOnHover={true} speed={100} className="space-x-10">
        <Link to="/news" className="p-2 text-gray-600 text-bold text-xl">
          Match Highlights:Germany vs Spain - a it happend ! Match
          Highlights::Germany vs Spain ...
        </Link>
        <Link to="/news" className="p-2 text-gray-600 text-bold text-xl">
          Match Highlights:Germany vs Spain - a it happend ! Match
          Highlights::Germany vs Spain ...
        </Link>
      </Marquee>
    </div>
  );
};

export default LatestNews;
