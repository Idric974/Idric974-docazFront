import styles from '../../../../styles/Post/CompoDeleteAnnonce.module.css';
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react';
import { deletePost } from '../../actions/posts.action';
import { useRouter } from 'next/router';

const CompDeleteAnnonce = () => {
  //! Récupération du postId.

  let postId;

  let getPostId = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const router = useRouter();
    postId = router.asPath.split('/DeleteAnnonce?')[1];
    console.log('postId :', postId);
  };

  getPostId();

  //! -------------------------------------------------

  const dispatch = useDispatch();

  const handleDeleteButton = (e) => {
    console.log('test handleDeleteButton');
    dispatch(deletePost(postId));
  };

  return (
    <div className={styles.box}>
      <div className={styles.deleteBox}>
        <h1 className={styles.boxTitle}>Suppression de cette annonce </h1>

        <p className={styles.boxText}>
          Attention en cliquant sur le bouton ci dessous vous allez définivement
          supprimer votre annonce du site docaz.re
        </p>

        <p className={styles.boxText}>Cette action est irréversible.</p>

        <p className={styles.boxText}>
          Soyez bien sûre de votre décision avant de cliquer.
        </p>

        <div className={styles.deleteButtonBox}>
          <button className={styles.deleteButton} onClick={handleDeleteButton}>
            {'Supprimer mon annonce'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CompDeleteAnnonce;
