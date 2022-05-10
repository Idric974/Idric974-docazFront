import {
  GET_POSTS,
  GET_ONLY_POSTS_USER,
  UPDATE_POSTS,
  DELETE_POST,
} from '../actions/posts.action';

const initialState = {};

export default function postReducer(state = initialState, action) {
  switch (action.type) {
    //
    //! Récupérer tous les posts.

    case GET_POSTS:
      return action.payload;

    //! --------------------------------------------------

    //! Récupérer que les posts d'un utilisateur.

    case GET_ONLY_POSTS_USER:
      return action.payload;

    //! --------------------------------------------------

    //! Mettre à jour un post.

    case UPDATE_POSTS:
      return action.payload;

    //! --------------------------------------------------

    //! Mettre à jour un post.

    case DELETE_POST:
      return action.payload;

    //! --------------------------------------------------

    default:
      return state;
  }
}
