import * as actionTypes from './types';
import { updateObject } from './utility';


export const initialState = {
  token: null,
  user: null,
  error: null,
  authErrors: null,
  fetchErrors: null,
  userFetchErrors: null,
  authLoading: false,
  fetchLoading: false,
  userFetchLoading: false,
  homePosts: null,
  groupPosts: null,
  categoryPosts: null,
  searchPosts: null,
}


const fetchStart = (state, action) => {
  return updateObject(state, {
    fetchErrors: null,
    fetchLoading: true
  })
}

const fetchSuccess = (state, action) => {
  switch (action.operation) {
    case 'group':
      return updateObject(state, {
        fetchErrors: null,
        fetchLoading: false,
        groupPosts: action.posts
      })
    case 'category':
      return updateObject(state, {
        fetchErrors: null,
        fetchLoading: false,
        categoryPosts: action.posts
      })
    default:
      return updateObject(state, {
        fetchErrors: null,
        fetchLoading: false,
        homePosts: action.posts
      })
  }
}

const fetchFail = (state, action) => {
  return updateObject(state, {
    fetchErrors: action.error,
    fetchLoading: false
  })
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_START: return fetchStart(state, action);
    case actionTypes.FETCH_SUCCESS: return fetchSuccess(state, action);
    case actionTypes.FETCH_FAIL: return fetchFail(state, action);
    default: return state;
  }
}

export default reducer;

