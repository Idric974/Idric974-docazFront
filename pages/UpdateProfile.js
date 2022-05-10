import CompUpdateProfile from '../src/Redux/components/MonCompte/CompUpdateProfile';
import CompNavigationBar from '../src/Redux/components/Navigation/CompNavigationBar';

const Profils = () => {
  return (
    <div>
      <CompNavigationBar></CompNavigationBar>
      <CompUpdateProfile></CompUpdateProfile>
    </div>
  );
};

export default Profils;
