import axios from 'axios';
export const ADD_USERS = 'ADD_USERS';
export const GET_USERS = 'GET_USERS';
export const DELETE_USERS = 'DELETE_USERS';

//! Logique pour la création d'un nouvel utilisateur.

export const addUsers = (data) => {
  return async (dispatch) => {
    try {
      const res = await axios.post(
        `${process.env.NEXT_PUBLIC_ANALYTICS_URL}api/user`,
        data
      );

      console.log(
        "👍 Users.actions ==> ADD_USERS ==> infos sur l'auteur du post :",
        res.data
      );

      dispatch({ type: ADD_USERS, payload: res.data });

      window.location = '/';
    } catch (err) {
      return console.log(
        '❌ Users.actions ==> ADD_USERS ==> Créer un utilisateur :',
        err
      );
    }
  };
};

//! -------------------------------------------------

//! Logique pour la suppréssion d'un  utilisateur.

export const deleteUsers = (id) => {
  return async (dispatch) => {
    try {
      const res = await axios.delete(
        `${process.env.NEXT_PUBLIC_ANALYTICS_URL}api/user/${id}`
      );

      console.log(
        '👍 Users.actions ==> DELETE_USERS ==> Supprimer un utilisateur :',
        res.data
      );

      dispatch({ type: DELETE_USERS, payload: res.data });

      window.location = '/';
    } catch (err) {
      return console.log(
        '❌ Users.actions ==> DELETE_USERS ==> Supprimer un utilisateur :',
        err
      );
    }
  };
};

//! -------------------------------------------------

//! Logique pour la création des infos sur l'auteur du post.

export const getUsers = () => {
  return async (dispatch) => {
    try {
      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_ANALYTICS_URL}api/user`
      );

      // console.log(
      //   "👍 Users.actions ==> GET_USERS ==> infos sur l'auteur du post :",
      //   res.data
      // );

      dispatch({ type: GET_USERS, payload: res.data });
    } catch (err) {
      return console.log(
        "❌ Users.actions ==> GET_USERS ==> infos sur l'auteur du post :",
        err
      );
    }
  };
};

//! -------------------------------------------------
