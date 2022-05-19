/* eslint-disable @next/next/no-img-element */
import React, { useRef, useState } from 'react';
import styles from '../../../../styles/Log/CompSignUp2Form.module.css';
import { auth } from '../../../../src/utils/firebase.config';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { storage } from '../../../../src/Firebase/firebase';

const SignUp = () => {
  //
  //! Les constantes.

  const registerEmail = useRef();
  const registerPassword = useRef();
  const [displayName, setDisplayName] = useState('');
  const [imageUpload, setimageUpload] = useState(null);
  const [postPicture, setPostPicture] = useState(null);

  //! -------------------------------------------------

  //! Logique pour la gestion de l'image.

  const handlePicture = (e) => {
    setPostPicture(URL.createObjectURL(e.target.files[0])); //* Prévisualisation.
    setimageUpload(e.target.files[0]); //* upload.
  };

  //! -------------------------------------------------

  //! Logique pour la la création d'un utiliateur.

  let date = new Date().getTime();
  let photoURL;

  const handleRegister = (e) => {
    e.preventDefault();

    console.log('Email : ', registerEmail.current.value);
    console.log('Password : ', registerPassword.current.value);
    console.log('Téléphone : ', displayName);

    if (imageUpload == null) return;

    const imageRef = ref(storage, `images/${imageUpload.name + date}`);

    uploadBytes(imageRef, imageUpload)
      .then((snapshot) => {
        getDownloadURL(snapshot.ref).then((url) => {
          //
          console.log('imageUrl ===> ', url);
          photoURL = url;
        });
      })
      .then(() => {
        setTimeout(() => {
          try {
            auth
              .createUserWithEmailAndPassword(
                registerEmail.current.value,
                registerPassword.current.value
              )
              .then(async (userAuth) => {
                await userAuth.user.updateProfile({
                  displayName,
                  photoURL,
                });

                console.log('userAuth :', userAuth);
                // window.location.reload();
              });
          } catch (error) {
            console.log(error.message);
          }
        }, 1500);

        // console.log('data : ', data);
      });
  };

  //! -------------------------------------------------

  return (
    <div className={styles.box}>
      <h1>CompSignUpForm2</h1>
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

          <input type="submit" value="Valider inscription" />
        </form>

        {/** Image de l'article **/}
        <div className={styles.prewieuImageBox}>
          <div>
            <img className={styles.prewieuImage} src={postPicture} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
