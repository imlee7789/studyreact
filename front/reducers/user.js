export const initialState = {
  isLoggedIn: false,
  user: {},
};

// Action name, Action, reducer는 react에서 setState와 같다.
// Action name
const LOG_IN = 'LOG_IN';
const LOG_OUT = 'LOG_OUT';

// Action
const loginAction = {
  type: LOG_IN,
  data: {
    nickname: '제로초',
  },
};
const logoutAction = {
  type: LOG_OUT,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOG_IN: {
      return {
        ...state,
        isLoggedIn: true,
        user: action.data,
      };
    }
    case LOG_OUT: {
      return {
        ...state,
        isLoggedIn: false,
        user: null,
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
};

export default reducer;