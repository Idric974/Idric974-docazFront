import CompMonCompte from '../src/Redux/components/MonCompte/CompMonCompte';
import CompNavigationBar from '../src/Redux/components/Navigation/CompNavigationBar';

const Profils = () => {
  return (
    <div>
      <CompNavigationBar></CompNavigationBar>
      <CompMonCompte></CompMonCompte>
    </div>
  );
};

export default Profils;
