import styles from '../../../../styles/Log/CompIndexLog.module.css';
import React, { useState } from 'react';
import SignInForm from './CompSignInForm';
import SignUpForm from './CompSignUpForm';
import SignUpForm2 from './CompSignUpForm2';

const IndexLog = (props) => {
  const [signUpModal, setSignUpModal] = useState(props.signup);
  const [signInModal, setSignInModal] = useState(props.signin);

  const handleModals = (e) => {
    if (e.target.id === 'register') {
      setSignInModal(false);
      setSignUpModal(true);
    } else if (e.target.id === 'login') {
      setSignUpModal(false);
      setSignInModal(true);
    }
  };

  return (
    <div className={styles.box}>
      <div className={styles.ulBox}>
        <div
          className={signUpModal ? 'active-btn' : null}
          onClick={handleModals}
          id="register"
        >
          {"S'inscrire"}
        </div>

        <div
          className={signInModal ? 'active-btn' : null}
          onClick={handleModals}
          id="login"
        >
          {'Se connecter'}
        </div>
      </div>

      {signUpModal && <SignUpForm2 />}
      {signInModal && <SignInForm />}
    </div>
  );
};

export default IndexLog;
