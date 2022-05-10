import CompNavigationBar from '../src/Redux/components/Navigation/CompNavigationBar';
import CompDeleteAnnonce from '../src/Redux/components/Post/CompDeleteAnnonce';

const DeleteAnnonces = () => {
  return (
    <div>
      <CompNavigationBar></CompNavigationBar>
      <CompDeleteAnnonce></CompDeleteAnnonce>
    </div>
  );
};

export default DeleteAnnonces;
