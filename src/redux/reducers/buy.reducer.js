import { produce } from 'immer';
import createReducer from './reducerUtils‏'

const initialState = [

];

/*buy: [
    {
        user: { name , _id},
        products: [
            {product:action.payload , count: 1 , sum: Number(action.payload.price)},
            {product , count},
        ]
        date: date ,
        sumTotal: price, 
        sumProducts: 
    }
]*/

function setSumTotal(buyCurrent) {
    let sumt = 0;
    buyCurrent.products.forEach((product , index) => {
        sumt += Number(product.sum);
    })
    buyCurrent.sumTotal = sumt;
}

function setSumProduct(buyCurrent) {
    console.log('setSumProduct');
    let count = 0;
    buyCurrent.products.forEach((product , index) => {
        count += Number(product.count);
    })
    buyCurrent.sumProducts = count;
}

const buyReducer = {
    addBuy(state, action) {
        state.push(action.payload);
    },
    addProductToBuy(state, action) {
        const { id , product } = action.payload;
        const x = state.find(buy => buy.user._id === id);
        x.products.push(product);
        // x.sumTotal += product.sum;
        setSumTotal(x);
        setSumProduct(x);
    },
    setCount(state, action) {
        const { idUser , idProduct , price , setCountfor } = action.payload;
        const a = state.find(buy => buy.user._id === idUser)
        const x = a.products.find(product => product.product._id === idProduct);
        x.count = setCountfor;
        x.sum = Number(price) * Number(setCountfor);
        setSumTotal(a);
        setSumProduct(a);
    },
    deleteBuy(state, action) {
        const { product , idUser } = action.payload;
        const x = state.find(buy => buy.user._id === idUser);
        console.log(x);
        x.products = (x.products.filter(p => p.product._id !== product._id));
        setSumTotal(x);
        setSumProduct(x);
    },
    deleteBuyObject(state, action) {
        const idUser = action.payload;
        const x = state.findIndex(buy => buy.user._id === idUser);
        console.log('findindex ' + x);
        state.splice(x, 1);
    }

}

export default produce((state, action) => createReducer(state, action, buyReducer), initialState);
