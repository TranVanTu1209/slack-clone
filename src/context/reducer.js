import * as actionTypes from './actionTypes';
export const initialState = {
  user: null
};

export const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type)
  {
    case actionTypes.SET_USER:
      localStorage.setItem('user', { email: payload.email, displayName: payload.displayName });
      return {
        ...state,
        user: payload
      }
    case actionTypes.LOGOUT:
      localStorage.removeItem('user');
      return {
        ...state,
        user: null
      }
    default: return state;
  }
}