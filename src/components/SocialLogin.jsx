import { FaGithub, FaGoogle } from 'react-icons/fa';

const SocialLogin = () => {
  return (
    <div>
      <div className="flex flex-col  w-ful space-y-2">
        <button className="btn">
          <FaGoogle className="text-2xl " /> Login with Google
        </button>
        <button className="btn">
          <FaGithub className="text-2xl " /> Login with Github
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
