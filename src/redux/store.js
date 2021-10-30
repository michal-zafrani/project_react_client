import {applyMiddleware, combineReducers , createStore ,  } from 'redux';
import {composeWithDevTools } from 'redux-devtools-extension';
import productReducer from './reducers/product.reducer';
import userReducer from './reducers/user.reducer';
import buyReducer from './reducers/buy.reducer';
import { setCurrentUid , addBuyToCart ,checkIfJwt } from './middleware/crud'


const reducer = combineReducers({
    products : productReducer,
    user: userReducer,
    buy: buyReducer,
})

const store = createStore(
    reducer,
    composeWithDevTools(
        applyMiddleware(setCurrentUid , addBuyToCart , checkIfJwt)
    ));
    
window.store  = store;
export default store;