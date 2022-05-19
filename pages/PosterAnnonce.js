import styles from '../styles/Post/CompoPosterAnnonce.module.css';
import CompNavigationBar from '../src/Redux/components/Navigation/CompNavigationBar';
//import CompPosterAnnonce from '../src/Redux/components/Post/CompPosterAnnonce';
import CompPosterAnnonce2 from '../src/Redux/components/Post/CompPosterAnnonce2';
import { useSelector } from 'react-redux';

const PosterAnnonce = () => {
  const userLogin = useSelector((state) => state.userReducer);
  // console.log('userLogin : ', userLogin);

  return (
    <div className={styles.box}>
      <CompNavigationBar></CompNavigationBar>
      {/* <CompPosterAnnonce></CompPosterAnnonce> */}
      <CompPosterAnnonce2></CompPosterAnnonce2>
    </div>
  );
};

export default PosterAnnonce;
