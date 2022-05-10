/* eslint-disable @next/next/no-img-element */
import styles from '../../../../styles/Post/CompoPosterAnnonce.module.css';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { timestampParser } from '../Utils';
import { addPost } from '../../actions/posts.action';
import { getUser } from '../../../Redux/actions/user.actions';

const PosterAnnonce = () => {
  //
  //! Récupération des informations user.

  const userData = useSelector((state) => state.userReducer);
  // console.log('🔺🔺🔺 CompPosterAnnonce ===> Utilisateur connecté :', userData);
  // console.log('🔺🔺🔺 CompPosterAnnonce ===> pseudo :', userData.pseudo);
  // console.log('🔺🔺🔺 CompPosterAnnonce ===> Image :', userData.file);
  // console.log('🔺🔺🔺 CompPosterAnnonce ===> posterId :', userData._id);

  const [userPseudo, setUserPseudo] = useState('');
  const [userImage, setUserImage] = useState('');
  const [posterId, setPosterId] = useState('');

  useEffect(() => {
    setUserPseudo(userData.pseudo);
    setUserImage(userData.file);
    setPosterId(userData._id);
  }, [userData.pseudo, userData.file, userData._id]);

  //! -------------------------------------------------

  //! Les constantes.

  const [name, setName] = useState('');
  const [brand, setBrand] = useState('');
  const [model, setModel] = useState('');
  const [town, setTown] = useState('');
  const [description, setDescription] = useState('');
  const [file, setFile] = useState();
  const [postPicture, setPostPicture] = useState(null);

  const dispatch = useDispatch();

  // console.log(
  //   '| name  : ' + name,
  //   '| brand : ' + brand,
  //   '| model : ' + model,
  //   '| town : ' + town,
  //   '| description : ' + description,
  //   '| file : ' + file,
  //   '| postPicture : ' + postPicture
  // );

  useEffect(() => {
    dispatch(getUser());
  });

  //! -------------------------------------------------

  //! Logique pour la gestion de l'image.

  const handlePicture = (e) => {
    setPostPicture(URL.createObjectURL(e.target.files[0]));
    setFile(e.target.files[0]);
  };

  //! -------------------------------------------------

  //! Logique pour la gestion des posts.

  const handlePost = async (e) => {
    e.preventDefault();

    if (name || brand || model || description || file) {
      const data = new FormData();
      data.append('posterId', userData._id);
      data.append('userPseudo', userPseudo);
      data.append('userImage', userImage);
      data.append('name', name);
      data.append('brand', brand);
      data.append('model', model);
      data.append('town', town);
      data.append('description', description);
      if (file) data.append('file', file);

      console.log('Data: ', Array.from(data));

      dispatch(addPost(data));
      // dispatch(getPosts());
      cancelPost();
    } else {
      alert('Veuillez compléter tous les champs avant de valider');
    }
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

        {/* Prévisualisation */}
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

      <div className={styles.messagePreview}>
        {name || brand || model || town || description ? (
          <li className="card-container">
            {/** Image de l'article **/}
            <div>{userData.pseudo}</div>

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

export default PosterAnnonce;
