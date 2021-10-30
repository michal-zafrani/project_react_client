import { actions } from '../actions/Actions';
import { saveUser, logIn, signIn, logInWithJwt } from '../../components/service';
import { getJwtFromCookie } from '../../components/Cookies'
import ModalAlert from '../../components/ModalAlert';
import {useState } from 'react'

export const checkIfJwt = ({ dispatch, getState }) => next => action => {
    if (action.type === 'CHECK_IF_JWT') {
        const a = getJwtFromCookie('jwt');
        console.log(a);
        if (a) {
            logInWithJwt(a)
                .then((response) => {
                    // <ModalAlert
                    //     user= {response.user.name}
                    //     resAction = {response.action}
                    //     show={modalShow}
                    //     onHide={() => setModalShow(false)}
                    // />
                    console.log('action: ' + response.action);
                    console.log('response: ' + response.user.name + ' ' + response.user._id);
                    dispatch(actions.setCurrentUser(response.user))
                    dispatch(actions.setToModal({action: response.action , massage: 'log in with jwt'}))

                })
                .catch((error) => {
                    dispatch(actions.setToModal({action: 'error' , massage: error}))
                    console.log(error);
                })
        }
    }
    return next(action)
}

export const setCurrentUid = ({ dispatch, getState }) => next => action => {
    
    if (action.type === 'SET_CURRENT_UID') {
        console.log('SET_CURRENT_UID');
        const newUser = action.payload;


        signIn(newUser)
            .then((response) => {
            //    <ModalAlert
            //             user= {response.user.name}
            //             resAction = {response.action}
            //             show={modalShow}
            //             onHide={() => setModalShow(false)}
            //         />
                console.log('action: ' + response.action)
                dispatch(actions.setCurrentUser(response.user))
                dispatch(actions.setToModal({action: response.action , massage: 'sucsses login'}))
            })
            .catch((error) => {
                dispatch(actions.setToModal({action: 'error' , massage: error.message}))
                throw error
            })
    }
    return next(action)
}

export const addBuyToCart = ({ dispatch, getState }) => next => action => {
    if (action.type === 'ADD_BUY_TO_CART') {
        console.log('addBuyToCart');
        const newProduct = { product: action.payload, count: 1, sum: Number(action.payload.price) }
        const l = getState().buy.find(b => b.user._id === getState().user.currentUser._id);
        if (l) {
            console.log(l);
            dispatch(actions.addProductToBuy({ id: getState().user.currentUser._id, product: newProduct }))
        } else {
            const newBuy = {
                user: getState().user.currentUser,
                products: [
                    newProduct
                ],
                date: new Date(),
                sumTotal: newProduct.sum,
                sumProducts: 1
            }
            dispatch(actions.addBuy(newBuy))
        }
    }
    return next(action)
}
