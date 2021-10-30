import {setJwtInCookie ,getJwtFromCookie} from './Cookies';
import axios from 'axios';


export function signIn(newUser) {
    console.log('my massage 1 ');

    return new Promise((resolve,reject) => {
        axios.post(`http://localhost:4040/user/signIn` , newUser)
        .then((res) => {
            console.log('my massage 2 ');

            setJwtInCookie(res.data.token);
            resolve(res.data)
        })
        .catch(err => {
            console.log('my massage 3 ');
            console.log(err);
            reject(err)
        })
    })
}

export function logInWithJwt(token) {
    return new Promise((resolve,reject) => {
        axios.get(`http://localhost:4040/user/logInWithJwt` , { headers: { 'Authorization': `${token}`}})
        .then((res) => {
            setJwtInCookie(res.data.token);
            resolve(res.data)
        })
        .catch(err => {
            reject(err)
        })
    })
}

// export function saveUser(newUser) {
//     return new Promise((resolve,reject) => {
//         axios.post(`http://localhost:4040/user/logUp` , newUser)
//         .then((res) => {
//             setJwtInCookie(res.data.token);
//             resolve(res.data.user)
//         })
//         .catch(err => {
//             console.log(err);
//             reject(err)
//         })
//     })
// }

// export function logIn(user) {
//     return new Promise((resolve,reject) => {
//         axios.get(`http://localhost:4040/user/logIn?name=${user.username}&password=${user.password}`)
//         .then((res) => {
//             setJwtInCookie(res.data.token);
//             resolve(res.data.user)
//         })
//         .catch(err => {
//             console.log(err);
//             reject(err)
//         })
//     })
// }

export function saveBuy(newBuy) {
    return new Promise((resolve, reject) => {
        axios.post(`http://localhost:4040/buy/createBuy` , newBuy ,{headers: { 'Authorization': `${getJwtFromCookie('jwt')}`}})
        .then(response => {
            resolve(response)
        })
        .catch(err => {
            console.log(err);
            reject(err)
        })
    })
}

export function getBuysList() {
    return new Promise((resolve, reject) => {
        axios.get(`http://localhost:4040/buy/getBuysList`, { headers: { 'Authorization': `${getJwtFromCookie('jwt')}`}})
        .then(response => {
            resolve(response)
        })
        .catch(err => {
            console.log(err);
            reject(err)
        })
    })
}