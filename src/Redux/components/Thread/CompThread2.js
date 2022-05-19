/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPosts } from '../../actions/posts.action';
import styles from '../../../../styles/Thread/CompThread.module.css';
import Card2 from '../Post/CompCard2';
import { isEmpty } from '../Utils';

const Thread2 = () => {
  const [loadPost, setLoadPost] = useState(true);
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.postReducer);
  console.log('⭐ CompThread2 ===>  Les posts :', posts);

  useEffect(() => {
    if (loadPost) {
      dispatch(getPosts());
      setLoadPost(false);
    }
  }, [loadPost, dispatch]);

  return (
    <div className={styles.box}>
      <ul className={styles.postBoxDiv}>
        {!isEmpty(posts[0]) &&
          posts.map((post) => {
            return <Card2 post={post} key={post._id} />;
          })}
      </ul>
    </div>
  );
};

export default Thread2;
