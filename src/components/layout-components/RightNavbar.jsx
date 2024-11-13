import FindUs from '../FindUs';
import SocialLogin from '../SocialLogin';

const RightNavbar = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-600 text-start mb-4">
        Login With
      </h2>
      <SocialLogin />
      <FindUs />
    </div>
  );
};

export default RightNavbar;
