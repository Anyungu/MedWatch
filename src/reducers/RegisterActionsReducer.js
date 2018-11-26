
import {TYPEDVALUE, REGISTERINGUSER, REGISTERSUCCESS, REGISTERFAIL} from '../actions/types';

const INITIAL = { name:'', email: '', password: '', confirm:'', loading:false, user:null, error:'' };


export default (state=INITIAL, action) => {

     
    switch (action.type) {

        case TYPEDVALUE:
            return {...state, [action.payload.prop]:action.payload.value , loading:false, error:''};

        case REGISTERINGUSER:
            return {...state, loading:true, name:'', email: '', password: '', confirm:'', error:'' };

        case REGISTERSUCCESS:
            return {...state, user: action.payload, loading:false, name:'', email: '', password: '', confirm:'', error:'' };

        case REGISTERFAIL:
            return {...state, loading:false, name:'', email: '', password: '', confirm:'', error:'Registration Failed.' };

        default:
            return state;
    }


};
