import Log from '../src/Redux/components/Log/CompIndexLog';
import { useSelector } from 'react-redux';
import CompMonCompte from '../src/Redux/components/MonCompte/CompMonCompte';

const Profils = () => {
  const userData = useSelector((state) => state.userReducer);
  // console.log(
  //   "⭐ CompCard ===>  Le profil de l'auteur du post :",
  //   userData._id
  // );

  return (
    <div className="profil-page">
      {userData._id ? (
        <CompMonCompte />
      ) : (
        <div className="log-container">
          <Log signin={false} signup={true} />
        </div>
      )}
    </div>
  );
};

export default Profils;
