import styles from '../styles/Post/CompoPosterAnnonce.module.css';
import CompNavigationBar from '../src/Redux/components/Navigation/CompNavigationBar';
import CompPosterAnnonce from '../src/Redux/components/Post/CompPosterAnnonce';
import { useSelector } from 'react-redux';

const PosterAnnonce = () => {
  const userLogin = useSelector((state) => state.userReducer);
  // console.log('userLogin : ', userLogin);

  return (
    <div className={styles.box}>
      <CompNavigationBar></CompNavigationBar>
      <CompPosterAnnonce></CompPosterAnnonce>
    </div>
  );
};

export default PosterAnnonce;
