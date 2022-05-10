import CompFavoris from '../src/Redux/components/Favoris/CompFavoris';
import CompNavigationBar from '../src/Redux/components/Navigation/CompNavigationBar';

const Profils = () => {
  return (
    <div>
      <CompNavigationBar></CompNavigationBar>
      <CompFavoris></CompFavoris>
    </div>
  );
};

export default Profils;
