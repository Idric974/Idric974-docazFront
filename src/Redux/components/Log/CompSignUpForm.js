/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react';
import styles from '../../../../styles/Log/CompSignUpForm.module.css';
import { useDispatch } from 'react-redux';
import { addUsers } from '../../../Redux/actions/users.actions';

const SignUpForm = () => {
  //
  //! Les constantes.

  const [fistName, setFistName] = useState('');
  const [userName, setUserName] = useState('');
  const [pseudo, setPseudo] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [town, setTown] = useState('');
  const [password, setPassword] = useState('');
  const [controlPassword, setControlPassword] = useState('');
  const [file, setFile] = useState();
  const [postPicture, setPostPicture] = useState(null);

  const dispatch = useDispatch();

  // console.log(
  //   '| Fist Name : ' + fistName,
  //   '| User Name : ' + userName,
  //   '| Pseudo : ' + pseudo,
  //   '| Email : ' + email,
  //   '| Phone : ' + phone,
  //   '| Town : ' + town,
  //   '| Password : ' + password,
  //   '| File : ' + file
  // );

  //! -------------------------------------------------

  //! Logique pour la gestion de l'image de profil.

  const handlePicture = (e) => {
    setPostPicture(URL.createObjectURL(e.target.files[0]));
    setFile(e.target.files[0]);
  };

  //! -------------------------------------------------

  //! POST du formulaire d'inscription utilisateur.

  const handleRegister = async (e) => {
    e.preventDefault();

    if (fistName || userName || pseudo || email || phone) {
      const data = new FormData();
      data.append('fistName', fistName);
      data.append('userName', userName);
      data.append('pseudo', pseudo);
      data.append('email', email);
      data.append('phone', phone);
      data.append('town', town);
      data.append('password', password);
      if (file) data.append('file', file);

      console.log('FormData: ', Array.from(data));

      dispatch(addUsers(data));
    } else {
      alert('Veuillez compléter tous les champs avant de valider');
    }
  };

  //! -------------------------------------------------

  return (
    <div className={styles.box}>
      {/* '' */}

      <div className={styles.PostForm}>
        {/* "" */}

        {/* Prénom */}
        <div className={styles.usersInfo}>
          <label htmlFor="pseudo">Prénom</label>
          <input
            type="text"
            name="fistName"
            id="fistName"
            onChange={(e) => setFistName(e.target.value)}
            value={fistName}
          />
          <div className="fistName error"></div>
        </div>

        {/* Nom */}
        <div className={styles.usersInfo}>
          <label htmlFor="pseudo">Nom</label>
          <input
            type="text"
            name="userName"
            id="userName"
            onChange={(e) => setUserName(e.target.value)}
            value={userName}
          />
          <div className="userName error"></div>
        </div>

        {/* Pseudo */}
        <div className={styles.usersInfo}>
          <label htmlFor="pseudo">Pseudo</label>

          <input
            type="text"
            name="pseudo"
            id="pseudo"
            onChange={(e) => setPseudo(e.target.value)}
            value={pseudo}
          />
          <div className="pseudo error"></div>
        </div>

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

        {/* Téléphone */}
        <div className={styles.usersInfo}>
          <label htmlFor="email">Télépnone</label>
          <input
            type="phone"
            name="phone"
            id="phone"
            onChange={(e) => setPhone(e.target.value)}
            value={phone}
          />
          <div className="phone error"></div>
        </div>

        {/* Ville */}
        <div className={styles.usersInfo}>
          <label htmlFor="email">Ville</label>
          <input
            type="text"
            name="town"
            id="town"
            onChange={(e) => setTown(e.target.value)}
            value={town}
          />
          <div className="town error"></div>
        </div>

        {/* Mot de passe */}
        <div className={styles.usersInfo}>
          <label htmlFor="password">Mot de passe</label>

          <input
            type="password"
            name="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <div className="password error"></div>
        </div>

        {/* Control mot de passe */}
        <div className={styles.usersInfo}>
          <label htmlFor="password-conf">Confirmer mot de passe</label>

          <input
            type="password"
            name="password"
            id="password-conf"
            onChange={(e) => setControlPassword(e.target.value)}
            value={controlPassword}
          />
          <div className="password-confirm error"></div>
        </div>

        {/* Image profil */}
        <div className={styles.inputImageBox}>
          <input
            className={styles.inputImage}
            type="file"
            id="file"
            name="file"
            accept=".jpg, .jpeg, .png"
            onChange={(e) => handlePicture(e)}
          />
        </div>

        {/** Pévisualiser image profil **/}
        <div className={styles.prewieuImageBox}>
          <div>
            <img className={styles.prewieuImage} src={postPicture} alt="" />
          </div>
        </div>

        {/* Checkbox */}
        <div className={styles.usersInfo}>
          <input type="checkbox" id="terms" />
          <label htmlFor="terms">{" J'accepte les conditions générales"}</label>
          <div className="terms error"></div>
        </div>

        {/* Valider inscription */}
        <button className={styles.postButton} onClick={handleRegister}>
          {'Valider mon inscription'}
        </button>
      </div>
    </div>
  );
};

export default SignUpForm;
