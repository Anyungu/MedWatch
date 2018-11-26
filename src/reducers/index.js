
import {combineReducers} from 'redux';
import RegisterActionsReducer from './RegisterActionsReducer';
import LoginActionsReducer from './LoginActionsReducer';




export default combineReducers ({

    registerAction: RegisterActionsReducer,
    loginAction: LoginActionsReducer
});
