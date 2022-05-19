import axios from 'axios';

export const GET_POSTS = 'GET_POSTS';
export const ADD_POST = 'ADD_POST';
export const GET_ONLY_POSTS_USER = 'GET_ONLY_POSTS_USER';
export const UPDATE_POSTS = 'UPDATE_POSTS';
export const DELETE_POST = 'DELETE_POST';

//! Logique de gestion de nouveaux posts.

export const addPost = (data) => {
  return async (dispatch) => {
    const res = await axios.post(
      `${process.env.NEXT_PUBLIC_ANALYTICS_URL}api/post/`,
      data
    );

    console.log(
      '👍 Posts.actions ==> ADD_POST ==> Ajouter un post :',
      res.data
    );

    // window.location = '/';
  };
};

//! -------------------------------------------------
//! Logique pour la récupération des posts.

export const getPosts = () => {
  return async (dispatch) => {
    try {
      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_ANALYTICS_URL}api/post/readAllPosts`
      );

      // console.log(
      //   '👍 posts.action ===> GET_POSTS ===> Liste de tous les posts :',
      //   res.data
      // );

      dispatch({ type: GET_POSTS, payload: res.data });
    } catch (err) {
      return console.log(
        '❌ posts.action ===> GET_POSTS ===> Liste de tous les posts :',
        err
      );
    }
  };
};

//! -------------------------------------------------

//! Logique pour la récupération des posts de l"utilisateur connecté.

export const getOnlyUserPosts = (uid) => {
  //console.log('id *********** : ', uid);
  return async (dispatch) => {
    try {
      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_ANALYTICS_URL}api/post/${uid}`
      );

      // console.log(
      //   '👍 posts.action ===> GET_ONLY_POSTS_USER ===> Liste des posts de l"utilisateur connecté :',
      //   res.data
      // );

      dispatch({ type: GET_ONLY_POSTS_USER, payload: res.data });
    } catch (err) {
      return console.log(
        '❌ posts.action ===> GET_ONLY_POSTS_USER ===> Liste des posts de l"utilisateur connecté:',
        err
      );
    }
  };
};

//! -------------------------------------------------

//! Logique de gestion de nouveaux posts.

// export const addPost = (data) => {
//   return async (dispatch) => {
//     const res = await axios.post(
//       `${process.env.NEXT_PUBLIC_ANALYTICS_URL}api/post/`,
//       data
//     );

//     console.log(
//       '👍 Posts.actions ==> ADD_POST ==> Ajouter un post :',
//       res.data
//     );

//     window.location = '/';
//   };
// };

//! -------------------------------------------------

//! Mise à jour d'un posts.

export const updatePost = (data, postId) => {
  return async (dispatch) => {
    try {
      const res = await axios.put(
        `${process.env.NEXT_PUBLIC_ANALYTICS_URL}api/post/${postId}`,
        data
      );

      console.log(
        '👍 Posts.actions ==> UPDATE_POSTS ==> Mise à jour d"un post :',
        res.data
      );

      dispatch({ type: UPDATE_POSTS, payload: res.data });
    } catch (err) {
      return console.log(
        '❌ Posts.actions ==> UPDATE_POSTS ==> Mise à jour d"un post :',
        err
      );
    }
  };
};

//! -------------------------------------------------

//! Suprimer un posts.

export const deletePost = (id) => {
  return async (dispatch) => {
    try {
      const res = await axios.delete(
        `${process.env.NEXT_PUBLIC_ANALYTICS_URL}api/post/${id}`
      );

      console.log(
        '👍 post.actions ==> DELETE_POST ==> Supprimer un post :',
        res.data
      );

      dispatch({ type: DELETE_POST, payload: res.data });

      window.location = '/mesPosts';
    } catch (err) {
      return console.log(
        '❌ post.actions ==> DELETE_POST ==> Supprimer un post :',
        err
      );
    }
  };
};

//! -------------------------------------------------
