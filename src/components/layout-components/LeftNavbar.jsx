import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

const LeftNavbar = () => {
  const [caterogys, setCategroy] = useState([]);
  useEffect(() => {
    fetch('https://openapi.programming-hero.com/api/news/categories')
      .then(res => res.json())
      .then(data => setCategroy(data.data.news_category));
  }, []);
  console.log(caterogys);
  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-600 text-start mb-4">
        All Caterogy
      </h2>
      <div className="flex flex-col ">
        {caterogys.map(caterogy => (
          <NavLink
            to={`/categroy/${caterogy.category_id}`}
            className="btn my-2 mr-4"
            key={caterogy.category_id}
          >
            {caterogy.category_name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default LeftNavbar;
