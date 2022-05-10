/* eslint-disable @next/next/no-img-element */
import styles from '../../../../styles//MonCompte/CompMesPostsCard.module.css';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { dateParser, isEmpty } from '../Utils';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faCode,
  faHighlighter,
  faThumbsUp,
  faThumbsDown,
  faHouse,
  faRightToBracket,
  faRightFromBracket,
  faUser,
  faSpinner,
  faPhone,
  faHeart,
  faPen,
  faTrashCan,
} from '@fortawesome/free-solid-svg-icons';

library.add(
  faCode,
  faHighlighter,
  faThumbsUp,
  faThumbsDown,
  faHouse,
  faRightToBracket,
  faRightFromBracket,
  faUser,
  faSpinner,
  faPhone,
  faHeart,
  faPen,
  faTrashCan
);

const Card = ({ post }) => {
  const [isLoading, setIsLoading] = useState(true);

  //! Le profil de l'auteur du post.

  const usersData = useSelector((state) => state.usersReducer);
  // console.log("⭐ CompCard ===>  Le profil de l'auteur du post :", usersData);

  //! --------------------------------------------------

  //! Le profile de l'utilisateur connecté.

  const userData = useSelector((state) => state.userReducer);
  // console.log(
  //   "⭐ CompCard ===>  Le profile de l'utilisateur connecté  :",
  //   userData
  // );

  //! --------------------------------------------------

  //! Stopper le isLoading.

  useEffect(() => {
    !isEmpty(usersData[0]) && setIsLoading(false);
  }, [usersData]);

  //! --------------------------------------------------

  const router = useRouter();

  const handleClick = async (e, path) => {
    e.preventDefault();

    if (path === '/UpdateAnnonce') {
      router.push(`/UpdateAnnonce/?${post._id}`);
    }

    if (path === '/DeleteAnnonce') {
      router.push(`/DeleteAnnonce/?${post._id}`);
    }
  };

  return (
    <div className={styles.box}>
      <li className={styles.cards} key={post._id}>
        {isLoading ? (
          <FontAwesomeIcon icon={faSpinner} />
        ) : (
          <>
            {/********** User image Box **********/}
            <div className={styles.userInfo}>
              {/** User image Box **/}
              <div className={styles.userImageBox}>
                <img
                  className={styles.userImage}
                  src={
                    !isEmpty(usersData[0]) &&
                    usersData
                      .map((user) => {
                        if (user._id === post.posterId) return user.file;
                        else return null;
                      })
                      .join('')
                  }
                  alt={post.userPseudo}
                />
              </div>

              {/** Pseudo de l'utilisateur **/}
              <div className={styles.pseudoDateBox}>
                {/** Pseudo de l'utilisateur **/}
                <div className={styles.userpseudo}>{post.userPseudo}</div>

                {/** Ville ou est disponible l'article **/}
                <div className={styles.lieuxBox}>
                  {'Disponible à : '}
                  {post.town}
                </div>

                {/** Date de création du post **/}
                <div className={styles.postDate}>
                  {dateParser(post.createdAt)}
                </div>
              </div>
            </div>

            {/********** FIN User image Box **********/}

            {/********** Corps du post **********/}

            <div className={styles.postBody}>
              {''}
              {/** Nom de l'article **/}
              <div className={styles.postName}>{post.name}</div>

              {/** Marque de l'article **/}
              <div className={styles.postBrand}>
                {'Marque : '}
                {post.brand}
              </div>

              {/** Modèle de l'article **/}
              <div className={styles.postModel}>
                {'Modèle : '}
                {post.model}
              </div>

              {/** Description de l'article **/}
              <div className={styles.postDescription}>
                {'Description : '}
                {post.description}
              </div>

              <div className={styles.postDescription}>
                {'post id : '}
                {post._id}
              </div>

              {/** Image de l'article **/}
              <div className={styles.postPictureBox}>
                {post.picture && (
                  <img
                    className={styles.postPicture}
                    src={post.picture}
                    alt="card-pic"
                  />
                )}
              </div>
            </div>

            {/********** FIN Corps du post **********/}

            {/********** Like barre  **********/}

            <div className={styles.likeBarBox}>
              <Link href="/">
                <a
                  className={styles.iconeText}
                  onClick={(e) => handleClick(e, '/UpdateAnnonce')}
                >
                  <FontAwesomeIcon icon={faPen} />
                  <div className={styles.iconeText}>{'Modifier'}</div>
                </a>
              </Link>

              <Link href="/">
                <a
                  className={styles.iconeText}
                  onClick={(e) => handleClick(e, '/DeleteAnnonce')}
                >
                  <FontAwesomeIcon icon={faTrashCan} />
                  <div className={styles.iconeText}>{'Supprimer'}</div>
                </a>
              </Link>
            </div>

            {/********** Like barre  **********/}
          </>
        )}
      </li>
    </div>
  );
};

export default Card;
