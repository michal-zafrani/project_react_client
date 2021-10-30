import {produce} from 'immer';
import createReducer from './reducerUtils‏'

const initialState = {
    currentUser: {
        name: '',
        _id: null,
    },
    toModal: { 
        action: null,
        massage: null
    }
}

const userReducer = {
    setCurrentUser(state, action) {
        console.log(action.payload);
        state.currentUser.name = action.payload.name;
        state.currentUser._id = action.payload._id;
    },
    setToModal(state, action) {
        console.log(action.payload);
        state.toModal.action = action.payload.action;
        state.toModal.massage = action.payload.massage;
    },
    deleteToModal(state, action) {
        state.toModal.action = null
        state.toModal.massage = null
    }
}

export default produce((state, action) => createReducer(state, action, userReducer), initialState);
