import CompNavigationBar from '../src/Redux/components/Navigation/CompNavigationBar';
import CompDeleteProfile from '../src/Redux/components/MonCompte/CompDeleteProfile';

const DeleteProfile = () => {
  return (
    <div>
      <CompNavigationBar></CompNavigationBar>
      <CompDeleteProfile></CompDeleteProfile>
    </div>
  );
};

export default DeleteProfile;
