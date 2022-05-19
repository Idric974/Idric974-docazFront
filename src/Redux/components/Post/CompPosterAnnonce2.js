/* eslint-disable @next/next/no-img-element */
import styles from '../../../../styles/Post/CompoPosterAnnonce.module.css';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { timestampParser } from '../Utils';
import { addPost } from '../../actions/posts.action';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { storage } from '../../../../src/Firebase/firebase';
import { auth } from '../../../../src/utils/firebase.config';
import 'firebase/auth';

console.log('auth : ', auth._delegate.currentUser);

const CompPosterAnnonce2 = () => {
  //
  //! Les constantes.

  const [displayName, setDisplayName] = useState('');
  const [userPseudo, setUserPseudo] = useState('');
  const [userImage, setUserImage] = useState('');
  const [posterId, setPosterId] = useState('');

  useEffect(() => {
    setDisplayName(auth._delegate.currentUser.displayName);
    setUserPseudo(auth._delegate.currentUser.email);
    setUserImage(auth._delegate.currentUser.photoURL);
    setPosterId(auth._delegate.currentUser.uid);
  }, []);

  console.log('Téléphone : ', displayName);
  console.log('email : ', userPseudo);
  console.log('userImage : ', userImage);
  console.log('posterId : ', posterId);

  //! -------------------------------------------------

  //! Récupération des informations user.

  //! -------------------------------------------------

  //! Les constantes.

  const [name, setName] = useState('');
  const [brand, setBrand] = useState('');
  const [model, setModel] = useState('');
  const [town, setTown] = useState('');
  const [description, setDescription] = useState('');
  const [imageUpload, setImageUpload] = useState(null);
  const [postPicture, setPostPicture] = useState(null);

  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getUser());
  // }),
  //   [];

  //! -------------------------------------------------

  //! Logique pour la gestion de l'image.

  const handlePicture = (e) => {
    setPostPicture(URL.createObjectURL(e.target.files[0])); //* Prévisualisation.
    setImageUpload(e.target.files[0]); //* upload.
  };

  //! -------------------------------------------------

  //! Logique pour la gestion des posts.

  let date = new Date().getTime();
  let imageUrl;
  let data;
  let postDate = new Date();

  const handlePost = async (e) => {
    e.preventDefault();

    if (imageUpload == null) return;

    const imageRef = ref(storage, `images/${imageUpload.name + date}`);

    uploadBytes(imageRef, imageUpload)
      .then((snapshot) => {
        getDownloadURL(snapshot.ref).then((url) => {
          //
          console.log('imageUrl ===> ', url);
          imageUrl = url;
        });
      })
      .then(() => {
        setTimeout(() => {
          data = {
            posterId,
            userPseudo,
            userImage,
            displayName,
            postDate,
            name,
            brand,
            model,
            town,
            description,
            imageUrl,
          };
        }, 1000);

        // console.log('data : ', data);
      })
      .then(() => {
        setTimeout(() => {
          dispatch(addPost(data));
        }, 1500);
      });
  };

  //! -------------------------------------------------

  //! Logique pour l'anulation d'un post.

  const cancelPost = () => {
    setName('');
    setBrand('');
    setModel('');
    setTown('');
    setDescription('');
    setPostPicture('');
  };

  //! -------------------------------------------------

  return (
    <div className={styles.box}>
      <h1>CompPosterAnnonce2</h1>

      <div className={styles.PostForm}>
        <input
          className={styles.inputTitle}
          name="name"
          type="text"
          placeholder="Nom de l'article"
          onChange={(e) => setName(e.target.value)}
          value={name}
          required
        />

        <input
          className={styles.inputTitle}
          name="brand"
          type="text"
          placeholder="Marque de l'article"
          onChange={(e) => setBrand(e.target.value)}
          value={brand}
          required
        />

        <input
          className={styles.inputTitle}
          name="model"
          type="text"
          placeholder="Modèle de l'article"
          onChange={(e) => setModel(e.target.value)}
          value={model}
          required
        />

        <input
          className={styles.inputTitle}
          name="town"
          type="text"
          placeholder="Ville où l'article est disponible"
          onChange={(e) => setTown(e.target.value)}
          value={town}
          required
        />

        <textarea
          className={styles.inputMessage}
          name="description"
          id="description"
          placeholder="Description de l'article"
          onChange={(e) => setDescription(e.target.value)}
          value={description}
        />

        <div className={styles.inputImageBox}>
          <input
            className={styles.inputImage}
            type="file"
            id="file-upload"
            name="file"
            accept=".jpg, .jpeg, .png"
            onChange={(e) => handlePicture(e)}
          />
        </div>

        <div>
          {name || brand || model || town || description ? (
            <button className="cancel" onClick={cancelPost}>
              {"Annuler l'annonce"}
            </button>
          ) : null}

          <button className={styles.postButton} onClick={handlePost}>
            {"Poster l'annonce"}
          </button>
        </div>
      </div>

      {/* Prévisualisation */}
      <div className={styles.messagePreview}>
        {name || brand || model || town || description ? (
          <li className="card-container">
            {/** Image de l'article **/}
            <div>{userPseudo}</div>

            {/** Nom de l'article **/}
            <div>{name}</div>

            {/** Marque de l'article **/}
            <div>{brand}</div>

            {/** Modèle de l'article **/}
            <div>{model}</div>

            {/** Ville de l'article **/}
            <div>{town}</div>

            {/** Description de l'article **/}
            <div>{description}</div>

            {/** Date du post **/}
            <div>{timestampParser(Date.now())}</div>

            {/** Image de l'article **/}
            <div className={styles.prewieuImageBox}>
              <div>
                <img className={styles.prewieuImage} src={postPicture} alt="" />
              </div>
            </div>
          </li>
        ) : null}
      </div>
    </div>
  );
};

export default CompPosterAnnonce2;
