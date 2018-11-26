
import firebase from 'firebase';
import {Actions} from 'react-native-router-flux';

import {TYPEDVALUE, REGISTERINGUSER, REGISTERSUCCESS, REGISTERFAIL} from './types'

export const typedValueLogin = ({prop, value}) => {
    return {
        type: TYPEDVALUE,
        payload: {prop, value}
    };
};


export const registeringUser = ({email,password, confirm}) => {


    if (password === confirm && password.length >= 6) {

        return (dispatch) => {

            dispatch ({
                type: REGISTERINGUSER
            })
    
            firebase.auth().createUserWithEmailAndPassword(email, password)
                .then(
                    (user)=>{
                        if(user){
                            user.updateProfile({
                                displayName: name
                                
                            }).then(
                                user => userRegisteredSuccessfuly(dispatch,user)
                                )
                        }
                })
                .catch(function(error) {
                
                    var errorCode = error.code;
                    var errorMessage = error.message;
                    () => userFailedToRegister (dispatch)
                
                });
            
        };

    }
    
    else {

        return {
            type: REGISTERFAIL

        };
        

    }

   
    
};


const userRegisteredSuccessfuly = (dispatch , user) => {
    dispatch ({
        type: REGISTERSUCCESS,
        payload: user
    }); 
 //   Actions.main().employeeList();
};


const userFailedToRegister = (dispatch) => {
    dispatch ({
        type: REGISTERFAIL
    }); 
};
