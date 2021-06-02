import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import homeworksReducer from "./reducers/homeworksReducer";
import usernameReducer from './reducers/usernameReducer'; 
import { composeWithDevTools } from "redux-devtools-extension";
import newHomeworkReducer from './reducers/newHomeworkReducer';
import editReducer from './reducers/editReducers';

const reducer = combineReducers({
    homeworks: homeworksReducer,
    username: usernameReducer,
    newHomework: newHomeworkReducer,
    edit: editReducer
});

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
