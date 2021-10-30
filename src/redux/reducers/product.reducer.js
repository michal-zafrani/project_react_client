import { produce } from 'immer';
import createReducer from './reducerUtils‏'

const initialState = [
    {_id: '00' ,name: 'apple 12' , description: 'bla bla' , price: 4500 , group: 'laptops' , img: 'laptop2.jpg'},
    {_id: '01' ,name: 'apple 13' , description: 'bla bla' , price: 4500 , group: 'laptops' , img: 'laptop1.jpg' }
]

const productReducer = {
    addProduct(state, action) {
        state.push(action.payload)
    } ,
}

export default produce((state, action) => createReducer(state, action, productReducer), initialState);
