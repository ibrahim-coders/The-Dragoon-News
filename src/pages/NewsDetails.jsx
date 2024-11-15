import React from 'react';
import Header from '../components/Header';
import RightNavbar from '../components/layout-components/RightNavbar';
import { Link, useLoaderData } from 'react-router-dom';

const NewsDetails = () => {
  const data = useLoaderData();
  const news = data.data[0];
  console.log(news);
  return (
    <div>
      <header>
        <Header></Header>
      </header>
      <main className="w-11/12 mx-auto grid grid-cols-12 gap-4">
        <section className="col-span-9">
          <h2 className="font-semibold  ml-8">Dragon News Home</h2>
          <div className="card bg-base-100 ">
            <figure className="px-10 pt-10 w-full">
              <img src={news?.image_url} alt="" className="rounded-xl" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{news?.title}</h2>
              <p>{news?.details}</p>
              <div className="card-actions">
                <Link
                  to={`/categroy/${news?.category_id}`}
                  className="btn btn-primary"
                >
                  Back to Category
                </Link>
              </div>
            </div>
          </div>
        </section>
        <aside className="col-span-3">
          <RightNavbar />
        </aside>
      </main>
    </div>
  );
};

export default NewsDetails;
