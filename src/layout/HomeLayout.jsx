import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import LatestNews from '../components/LatestNews';
import LeftNavbar from '../components/layout-components/LeftNavbar';
import RightNavbar from '../components/layout-components/RightNavbar';
import Navbar from '../components/Navbar';
import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
const HomeLayout = () => {
  return (
    <div className="font-poppins">
      <ToastContainer />
      <header>
        <Header />
        <section className="w-11/12 mx-auto">
          <LatestNews></LatestNews>
        </section>
      </header>
      <nav>
        <section className="w-11/12 mx-auto">
          <Navbar />
        </section>
      </nav>
      <main className="w-11/12 mx-auto pt-5 grid md:grid-cols-12">
        <aside className="left col-span-3">
          <LeftNavbar />
        </aside>
        <section className="col-span-6">
          <Outlet />
        </section>
        <aside className="col-span-3">
          <RightNavbar />
        </aside>
      </main>
    </div>
  );
};

export default HomeLayout;
