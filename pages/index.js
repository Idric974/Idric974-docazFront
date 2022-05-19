/* eslint-disable react/no-unescaped-entities */

import styles from '../styles/PageIndex.module.css';
import Logo from '../src/Redux/components/Banniere/CompLogo';
import CompNavigationBar from '../src/Redux/components/Navigation/CompNavigationBar';
// import CompThread from '../src/Redux/components/Thread/CompThread';
import CompThread2 from '../src/Redux/components/Thread/CompThread2';

//!------------------------------------------

const Index = () => {
  //

  return (
    <div className={styles.box}>
      <Logo></Logo>
      <CompNavigationBar></CompNavigationBar>
      {/* <CompThread></CompThread> */}
      <CompThread2></CompThread2>
    </div>
  );
};

export default Index;
