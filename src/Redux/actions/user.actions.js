import axios from 'axios';

export const GET_USER = 'GET_USER';
export const UPLOAD_PICTURE = 'UPLOAD_PICTURE';
export const UPDATE_BIO = 'UPDATE_BIO';
export const FOLLOW_USER = 'FOLLOW_USER';
export const UNFOLLOW_USER = 'UNFOLLOW_USER';
export const GET_USER_ERRORS = 'GET_USER_ERRORS';
export const GET_ONLY_POSTS_USER = 'GET_ONLY_POSTS_USER';

export const getUser = (uid) => {
  return async (dispatch) => {
    try {
      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_ANALYTICS_URL}api/user/${uid}`
      );
      // console.log('👍 getUser ===> user.actions :', res.data);
      dispatch({ type: GET_USER, payload: res.data });
    } catch (err) {
      return console.log('❌ getUser ===> user.actions :', err.statusText);
    }
  };
};

export const uploadPicture = (data, id) => {
  return (dispatch) => {
    return axios
      .post(`${process.env.NEXT_PUBLIC_ANALYTICS_URL}api/user/upload`, data)
      .then((res) => {
        if (res.data.errors) {
          dispatch({ type: GET_USER_ERRORS, payload: res.data.errors });
        } else {
          dispatch({ type: GET_USER_ERRORS, payload: '' });
          return axios
            .get(`${process.env.REACT_APP_API_URL}api/user/${id}`)
            .then((res) => {
              dispatch({ type: UPLOAD_PICTURE, payload: res.data.picture });
            });
        }
      })
      .catch((err) => console.log(err));
  };
};

//! Mise à jour des inforations utiliateur.

export const updateBio = (userId, data) => {
  return async (dispatch) => {
    try {
      const res = await axios({
        method: 'put',
        url: `${process.env.NEXT_PUBLIC_ANALYTICS_URL}api/user/` + userId,
        data,
      });
      dispatch({ type: UPDATE_BIO, payload: data });
      console.log(
        '👍 user.actions ==> UPDATE_BIO ==> Mise à jour des inforations utiliateur :',
        res.data
      );
    } catch (err) {
      return console.log(
        '❌ user.actions ==> UPDATE_BIO ==> Mise à jour des inforations utiliateur :',
        err
      );
    }
  };
};

//! -------------------------------------------------

export const followUser = (followerId, idToFollow) => {
  return (dispatch) => {
    return axios({
      method: 'patch',
      url:
        `${process.env.NEXT_PUBLIC_ANALYTICS_URL}api/user/follow/` + followerId,
      data: { idToFollow },
    })
      .then((res) => {
        dispatch({ type: FOLLOW_USER, payload: { idToFollow } });
      })
      .catch((err) => console.log(err));
  };
};

export const unfollowUser = (followerId, idToUnfollow) => {
  return (dispatch) => {
    return axios({
      method: 'patch',
      url:
        `${process.env.NEXT_PUBLIC_ANALYTICS_URL}api/user/unfollow/` +
        followerId,
      data: { idToUnfollow },
    })
      .then((res) => {
        dispatch({ type: UNFOLLOW_USER, payload: { idToUnfollow } });
      })
      .catch((err) => console.log(err));
  };
};
