import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import authReducer from "./reducers/authReducer"

const store = createStore(
    combineReducers({ auth: authReducer }),
    composeWithDevTools(applyMiddleware(thunk))
);

store.subscribe(() => console.log('store', store.getState()))

export default store;