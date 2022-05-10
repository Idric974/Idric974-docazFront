import React from 'react';
import CompMesPostsThread from '../src/Redux/components/MonCompte/CompMesPostsThread';
import CompNavigationBar from '../src/Redux/components/Navigation/CompNavigationBar';

const mesPosts = () => {
  return (
    <div>
      <CompNavigationBar></CompNavigationBar>
      <CompMesPostsThread></CompMesPostsThread>
    </div>
  );
};

export default mesPosts;
