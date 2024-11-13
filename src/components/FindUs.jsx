import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const FindUs = () => {
  return (
    <div>
      <h2 className="text-gray-600 text-2xl my-4 ">Find Us On</h2>

      <div className="join join-vertical flex flex-col w-ful mt-4 items-start">
        <button className="btn w-full join-item justify-start border border-cyan-400 rounded-md px-4 py-2 flex  gap-2 hover:border-cyan-500 transition duration-300 ease-in-out">
          <FaFacebook className="text-cyan-400 text-xl" />
          Facebook
        </button>

        <button className="btn w-full justify-start join-item border border-cyan-400 rounded-md px-4 py-2 flex items-center gap-2 hover:border-cyan-500 transition duration-300 ease-in-out">
          <FaInstagram className="text-red-300 text-xl" /> Instagram
        </button>
        <button className="btn join-item border w-full justify-start border-cyan-400 rounded-md px-4 py-2 flex items-center gap-2 hover:border-cyan-500 transition duration-300 ease-in-out">
          <FaTwitter className="text-sky-400 text-xl" />
          Twitter
        </button>
      </div>
    </div>
  );
};

export default FindUs;
