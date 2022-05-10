import React from 'react';
import CompNavigationBar from '../src/Redux/components/Navigation/CompNavigationBar';
import CompUpdateAnnonce from '../src/Redux/components/Post/CompUpdateAnnonce';

const mesPosts = () => {
  return (
    <div>
      <CompNavigationBar></CompNavigationBar>
      <CompUpdateAnnonce></CompUpdateAnnonce>
    </div>
  );
};

export default mesPosts;
