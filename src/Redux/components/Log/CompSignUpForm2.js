import React, { useRef, useState } from 'react';
import styles from '../../../../styles/Log/CompSignUp2Form.module.css';
import { auth } from '../../../../src/utils/firebase.config';

const SignUp = () => {
  const registerEmail = useRef();
  const registerPassword = useRef();
  const [displayName, setDisplayName] = useState('');
  // const [photoURL, setPhotoURL] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();

    console.log('Email : ', registerEmail.current.value);
    console.log('Password : ', registerPassword.current.value);
    console.log('Téléphone : ', displayName);

    try {
      auth
        .createUserWithEmailAndPassword(
          registerEmail.current.value,
          registerPassword.current.value
        )
        .then(async (userAuth) => {
          await userAuth.user.updateProfile({
            displayName,
          });

          console.log('userAuth :', userAuth);
          // window.location.reload();
        });
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className={styles.box}>
      <div className="signup">
        <h3>{"S'inscrire"}</h3>

        <form onSubmit={(e) => handleRegister(e)}>
          <input
            type="email"
            placeholder="Email"
            required
            ref={registerEmail}
          />

          <input
            type="password"
            placeholder="Mot de passe"
            ref={registerPassword}
            required
          />

          <input
            type="tel"
            placeholder="Numéro de téléphone"
            onChange={(e) => setDisplayName(e.target.value)}
            required
          />

          <input type="submit" value="Valider inscription" />
        </form>
      </div>
    </div>
  );
};

export default SignUp;
