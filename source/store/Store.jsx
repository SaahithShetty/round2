import { applyMiddleware, createStore, combineReducers } from "redux";
import ReduxThunk from "redux-thunk";
import authReducer from "./reducers/auth";
const reducer = combineReducers({
  auth: authReducer,
});

const store = createStore(reducer, applyMiddleware(ReduxThunk));

export default store;
