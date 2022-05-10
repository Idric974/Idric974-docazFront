import React, { useEffect, useState } from 'react';
import styles from '../../../../styles/MonCompte/CompMesPostsThread.module.css';
import { useDispatch, useSelector } from 'react-redux';
import CompMesPostsCard from '../MonCompte/CompMesPostsCard';
import { getOnlyUserPosts } from '../../actions/posts.action';
import { isEmpty } from '../Utils';

const CompMesPostsThread = () => {
  const [loadPost, setLoadPost] = useState(true);
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.postReducer);
  // console.log(
  //   '⭐ CompMesPostsThread ===>  Les posts de l"utilisateur :',
  //   posts
  // );

  useEffect(() => {
    if (loadPost) {
      dispatch(getOnlyUserPosts());
      setLoadPost(false);
    }
  }, [loadPost, dispatch]);
  return (
    <div className={styles.box}>
      <ul className={styles.postBoxDiv}>
        {!isEmpty(posts[0]) &&
          posts.map((post) => {
            return <CompMesPostsCard post={post} key={post._id} />;
          })}
      </ul>
    </div>
  );
};

export default CompMesPostsThread;
