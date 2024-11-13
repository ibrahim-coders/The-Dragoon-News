import { useLoaderData } from 'react-router-dom';
import NewCard from '../components/layout-components/NewCard';

const CategoryNews = () => {
  const { data: news } = useLoaderData();
  console.log(news);
  return (
    <div>
      <h2 className="font-semibold mb-3">Dragon News Home</h2>
      <p className="text-gray-400 text-sm">News Found on this Category</p>
      <div>
        {news.map(singleNews => (
          <NewCard key={singleNews.id} news={singleNews} />
        ))}
      </div>
    </div>
  );
};

export default CategoryNews;
