/* eslint-disable @next/next/no-img-element */
import styles from '../../../../styles/MonCompte/CompMonCompte.module.css';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { updateBio } from '../../../Redux/actions/user.actions';

library.add(faRightFromBracket);

const Profils = () => {
  //! I) Affichage des informations concernant l'utilisateur connecté.

  //? I) Récupéra Le profile de l'utilisateur connecté.

  const userData = useSelector((state) => state.userReducer);
  // console.log(
  //   "⭐ CompMonCompte ===> Le profile de l'utilisateur connecté  :",
  //   userData
  // );

  //? --------------------------------------------------

  //? Les constantes.

  const [firstName, setFirstName] = useState('');
  const [name, setName] = useState('');
  const [pseudo, setPseudo] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [town, setTown] = useState(null);
  const [file, setFile] = useState();

  useEffect(() => {
    setFirstName(userData.fistName);
    setName(userData.userName);
    setPseudo(userData.pseudo);
    setPhone(userData.phone);
    setEmail(userData.email);
    setTown(userData.town);
    setFile(userData.file);
  }),
    [userData];

  const dispatch = useDispatch();

  //? --------------------------------------------------

  //! II) POST de la modification des informations concernant l'utilisateur connecté.

  //? Les contantes.

  const [userFirstName, setUserFirstName] = useState();
  const [userName, setUserName] = useState();
  const [userPseudo, setUserPseudo] = useState();
  const [userEmail, setUserEmail] = useState();
  const [userPhone, setUserPhone] = useState();
  const [userTown, setUserTown] = useState();
  const [userPassword, setUserPassword] = useState();
  const [userFile, setUserFile] = useState();
  const [postPicture, setPostPicture] = useState(null);

  //? -------------------------------------------------

  //? Logique pour la gestion de l'image.

  const handlePicture = (e) => {
    setPostPicture(URL.createObjectURL(e.target.files[0]));
    setUserFile(e.target.files[0]);
  };

  //? -------------------------------------------------

  //? Logique pour la gestion des posts.

  const handleProfil = async () => {
    if (
      userFirstName ||
      userName ||
      userPseudo ||
      userEmail ||
      userPhone ||
      userTown ||
      userPassword ||
      userFile
    ) {
      const data = new FormData();

      data.append('firstName', userFirstName);
      data.append('name', userName);
      data.append('pseudo', userPseudo);
      data.append('email', userEmail);
      data.append('phone', userPhone);
      data.append('town', userTown);
      data.append('password', userPassword);
      if (file) data.append('file', userFile);

      console.log('Data: ', Array.from(data));

      dispatch(updateBio(userData._id, data));
    } else {
      alert('Veuillez compléter tous les champs avant de valider');
    }
  };

  //? -------------------------------------------------

  //! -------------------------------------------------

  return (
    <div className={styles.box}>
      {/** Titre de la page **/}
      <div className={styles.titleBox}>
        <div className={styles.title}>Mon Compte</div>

        <div className={styles.inconeBox}>
          <p className={styles.icone}>
            <FontAwesomeIcon icon={faRightFromBracket} />
          </p>

          <p className={styles.iconeText}>Déconnexion</p>
        </div>
      </div>

      {/** Information sur le l'utilisateur **/}
      {/* <div className={styles.usersInfosBox}>
        <div className={styles.usersInfo}>
          <div className={styles.info1}>{'Prénom :'}</div>
          <div className={styles.info2}>{firstName}</div>
        </div>

        <div className={styles.usersInfo}>
          <div className={styles.info1}>{'Nom :'}</div>
          <div className={styles.info2}>{name}</div>
        </div>

        <div className={styles.usersInfo}>
          <div className={styles.info1}>{'Pseudo :'}</div>
          <div className={styles.info2}>{pseudo}</div>
        </div>

        <div className={styles.usersInfo}>
          <div className={styles.info1}>{'Téléphone :'}</div>
          <div className={styles.info2}>{phone}</div>
        </div>

        <div className={styles.usersInfo}>
          <div className={styles.info1}>{'Email :'}</div>
          <div className={styles.info2}>{email}</div>
        </div>

        <div className={styles.usersInfo}>
          <div className={styles.info1}>{'Ville :'}</div>
          <div className={styles.info2}>{town}</div>
        </div>

        <div className={styles.usersInfo}>
          <img className={styles.usersInfoImage} src={file} alt="user-pic" />
        </div>
      </div> */}

      {/** Bouton gestion profl **/}

      <div className={styles.formBox}></div>

      {/** Formulaire de modification **/}

      <div className={styles.formBox}>
        <div className={styles.inputInstruction}>
          Modifiez ici toutes vos informations.
          <br></br>
          <br></br>
          <strong>Attention tous les champs doivent être complétés.</strong>
        </div>
        {''}
        <input
          className={styles.inputInfos}
          name="userFirstName"
          type="text"
          placeholder={'Prénom'}
          onChange={(e) => setUserFirstName(e.target.value)}
          value={userFirstName}
          required
        />

        <input
          className={styles.inputInfos}
          name="userName"
          type="text"
          placeholder="Nom"
          onChange={(e) => setUserName(e.target.value)}
          value={userName}
          required
        />

        <input
          className={styles.inputInfos}
          name="userPseudo"
          type="text"
          placeholder="Pseudo"
          onChange={(e) => setUserPseudo(e.target.value)}
          value={userPseudo}
          required
        />

        <input
          className={styles.inputInfos}
          name="userPhone"
          type="phone"
          placeholder="Téléphone"
          onChange={(e) => setUserPhone(e.target.value)}
          value={userPhone}
          required
        />

        <input
          className={styles.inputInfos}
          name="email"
          type="email"
          placeholder="Email"
          onChange={(e) => setUserEmail(e.target.value)}
          value={userEmail}
          required
        />

        <input
          className={styles.inputInfos}
          name="userTown"
          type="texte"
          placeholder="Ville"
          onChange={(e) => setUserTown(e.target.value)}
          value={userTown}
          required
        />

        <input
          className={styles.inputInfos}
          name="password"
          type="password"
          placeholder="Mot de passe"
          onChange={(e) => setUserPassword(e.target.value)}
          value={userPassword}
          required
        />

        <div className={styles.inputImageBox}>
          <input
            className={styles.inputImage}
            type="file"
            id="file-upload"
            name="userFile"
            accept=".jpg, .jpeg, .png"
            onChange={(e) => handlePicture(e)}
          />
        </div>

        {/** Image de l'article **/}
        <div className={styles.prewieuImageBox}>
          <div>
            <img className={styles.prewieuImage} src={postPicture} alt="" />
          </div>
        </div>

        <div>
          <button className={styles.postButton} onClick={handleProfil}>
            {'Valider les modifications'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profils;
