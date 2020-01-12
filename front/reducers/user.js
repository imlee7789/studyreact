const dummyUser = {
  nickname: '제로초',
  Post: [],
  Followings: [],
  Followers: [],
};

export const initialState = {
  isLoggedIn: false,
  user: null,
};

// Action name, Action, reducer는 react에서 setState와 같다.
// Action name
export const SIGN_UP = 'SIGN_UP';
export const LOG_IN = 'LOG_IN';
export const LOG_OUT = 'LOG_OUT';

// Action
export const signUpAction = (data) => {
  return {
    type: SIGN_UP,
    data: data,
  };
};
export const loginAction = {
  type: LOG_IN,
};
export const logoutAction = {
  type: LOG_OUT,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOG_IN: {
      return {
        ...state,
        isLoggedIn: true,
        user: dummyUser,
      };
    }
    case LOG_OUT: {
      return {
        ...state,
        isLoggedIn: false,
        user: null,
      };
    }
    case SIGN_UP: {
      return {
        ...state,
        signUpData: action.data,
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
};