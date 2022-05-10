import React, { useState } from 'react';
import CompUpdateProfile from './CompUpdateProfile';
import CompDeleteProfile from './CompDeleteProfile';
import CompMesPostsThread from './CompMesPostsThread';

const CompUserPostIndex = (props) => {
  const [compUpdateProfileModal, setCompUpdateProfile] = useState(
    props.updateProfile
  );

  const [compDeleteProfile, setCompDeleteProfile] = useState(
    props.deleteProfile
  );

  const [compMesPostsThread, setCompMesPostsThread] = useState(
    props.MesPostsThread
  );

  const handleModals = (e) => {
    if (e.target.id === 'updateProfile') {
      setSignInModal(false);
      setSignUpModal(true);
      setSignUpModal(true);
    } else if (e.target.id === 'deleteProfil') {
    } else {
      setSignUpModal(false);
      setSignInModal(true);
      setSignUpModal(true);
    }
  };

  return (
    <div className="connection-form">
      <div className="form-container">
        <ul>
          <li
            onClick={handleModals}
            id="updateProfile"
            className={signUpModal ? 'active-btn' : null}
          >
            Modifier Profile
          </li>

          <li
            onClick={handleModals}
            id="deleteProfil"
            className={signInModal ? 'active-btn' : null}
          >
            Supprimer profile
          </li>

          <li
            onClick={handleModals}
            id="mesPostsThread"
            className={signInModal ? 'active-btn' : null}
          >
            Modofier posts
          </li>
        </ul>
        {compUpdateProfileModal && <CompUpdateProfile />}
        {compDeleteProfile && <CompDeleteProfile />}
        {compMesPostsThread && <CompMesPostsThread />}
      </div>
    </div>
  );
};

export default CompUserPostIndex;
