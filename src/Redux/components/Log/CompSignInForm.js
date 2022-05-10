import styles from '../../../../styles/Log/CompSignInForm.module.css';
import React, { useState } from 'react';
import axios from 'axios';

const SignInForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    const emailError = document.querySelector('.email.error');
    const passwordError = document.querySelector('.password.error');

    axios({
      method: 'post',
      url: `${process.env.NEXT_PUBLIC_ANALYTICS_URL}api/user/login`,
      withCredentials: true,
      data: {
        email,
        password,
      },
    })
      .then((res) => {
        console.log(res);
        if (res.data.errors) {
          emailError.innerHTML = res.data.errors.email;
          passwordError.innerHTML = res.data.errors.password;
        } else {
          window.location = '/';
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className={styles.box}>
      {' '}
      <form action="" onSubmit={handleLogin} id="sign-up-form">
        {/* "" */}
        {/* Email */}
        <div className={styles.usersInfo}>
          <label htmlFor="email">Email</label>

          <input
            type="text"
            name="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <div className="email error"></div>
        </div>

        {/* Email */}
        <div className={styles.usersInfo}>
          <label htmlFor="password">Mot de passe</label>
          <br />
          <input
            type="password"
            name="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <div className="password error"></div>
        </div>

        {/* Bouton connecter */}
        <div className={styles.usersInfo}>
          <input type="submit" value="Se connecter" />
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
