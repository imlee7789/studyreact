import { combineReducers } from 'redux';
import user from './user';
import post from './post';

// root reducer
// redux는 실제 하나의 store만 갖지만
// code를 편하게 분리하기 위해 user, post와 같이 각기 작성 후
// redux에서 제공하는 combineReducers를 사용해 묶어준다.
const rootReducer = combineReducers({
  user,
  post,
});

export default rootReducer;