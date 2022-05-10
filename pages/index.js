/* eslint-disable react/no-unescaped-entities */

import styles from '../styles/PageIndex.module.css';
import Logo from '../src/Redux/components/Banniere/CompLogo';
import CompNavigationBar from '../src/Redux/components/Navigation/CompNavigationBar';
import CompThread from '../src/Redux/components/Thread/CompThread';

//!------------------------------------------

const Index = () => {
  //

  return (
    <div className={styles.box}>
      <Logo></Logo>
      <CompNavigationBar></CompNavigationBar>
      <CompThread></CompThread>
    </div>
  );
};

export default Index;
