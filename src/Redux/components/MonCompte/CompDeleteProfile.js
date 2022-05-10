import styles from '../../../../styles/MonCompte/CompDeleteProfile.module.css';
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react';
import { deleteUsers } from '../../../Redux/actions/users.actions';
import { getUser } from '../../../Redux/actions/user.actions';

const CompDeleteProfile = () => {
  //
  //! Récupération des informations user.

  const userData = useSelector((state) => state.userReducer);
  // console.log('CompPosterAnnonce ===> posterId :', userData._id);

  const [userId, setUserId] = useState('');

  useEffect(() => {
    setUserId(userData._id);
  }, [userData._id]);

  //! -------------------------------------------------

  const dispatch = useDispatch();

  const handleDeleteButton = (e) => {
    console.log('test handleDeleteButton');
    dispatch(deleteUsers(userId));
  };

  return (
    <div className={styles.box}>
      <div className={styles.deleteBox}>
        <h1 className={styles.boxTitle}>Suppression de votre compte</h1>

        <p className={styles.boxText}>
          Attention en cliquant sur le bouton ci dessous vous allez définivement
          supprimer votre compte du site docaz.re
        </p>

        <p className={styles.boxText}>Cette action est irréversible.</p>

        <p className={styles.boxText}>
          Soyez bien sûre de votre décision avant de cliquer.
        </p>

        <div className={styles.deleteButtonBox}>
          <button className={styles.deleteButton} onClick={handleDeleteButton}>
            {'Supprimer mon compte'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CompDeleteProfile;
