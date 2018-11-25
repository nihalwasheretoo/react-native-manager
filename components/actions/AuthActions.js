import { EMAIL_CHANGED,PASSWORD_CHANGED,LOGIN_USER_SUCCESS,LOGIN_USER_FAIL,LOGIN_USER } from './types';
import { Actions } from 'react-native-router-flux';

export const emailChanged = (text) => {
  return{
    type: 'EMAIL_CHANGED',
    payload: text
  };
};

export const passwordChanged = (text) => {
  return{
    type: 'PASSWORD_CHANGED',
    payload: text
  };
};

export const loginUser = ({email,password}) => {
  return (dispatch) => {
    dispatch({type: LOGIN_USER});
    // console.log('Email: '+email);
    // console.log('Password: '+password);
    if(email === 'test' && password === 'test'){
      loginUserSuccess(dispatch, email);
    }else{
      loginUserFail(dispatch);
    }
  };
};

const loginUserSuccess = (dispatch, email) => {
  dispatch({
    type: LOGIN_USER_SUCCESS,
    payload: email
  });

  Actions.main();

};

const loginUserFail = (dispatch) => {
  dispatch({
    type: LOGIN_USER_FAIL
    });
};
