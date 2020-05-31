import * as actionTypes from './types';
import axios from 'axios';

//AUTH ACTIONS
export const authStart = () => {
  return {
    type: actionTypes.AUTH_START
  }
}

export const authSuccess = (token) => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    token: token
  }
}

export const authFail = (error) => {
  return {
    type: actionTypes.AUTH_FAIL,
    error: error
  }
}


//OTHER ACTIONS

export const fetchStart = () => {
  return {
    type: actionTypes.FETCH_START
  }
}

export const fetchSuccess = (posts, operation) => {
  return {
    type: actionTypes.FETCH_SUCCESS,
    posts: posts,
    operation: operation
  }
}

export const fetchFail = (error) => {
  return {
    type: actionTypes.FETCH_FAIL,
    error: error
  }
}

const urlChooser = (operation, group, category) => {
  switch (operation) {
    case 'group': return `http://127.0.0.1:8000/api/posts/group/${group}/nothing/`;
    case 'category': return `http://127.0.0.1:8000/api/posts/category/nothing/${category}/`
    default: return 'http://127.0.0.1:8000/api/posts/home/nothing/nothing/';
  }
}
export const fetchPosts = (operation, group, category) => {
  return dispatch => {
    dispatch(fetchStart());
    axios.get(urlChooser(operation, group, category)).then(res => {
      const posts = {
        group: group,
        category: category,
        posts: res.data
      }
      dispatch(fetchSuccess(posts, operation))
      return posts;
    }).catch(error => {
      dispatch(fetchFail(error))
    })
  }
}