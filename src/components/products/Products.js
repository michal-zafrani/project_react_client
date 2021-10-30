import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import Cardproduct from './Cardproduct';
import { useParams, withRouter } from 'react-router-dom';
import { actions } from '../../redux/actions/Actions';
import axios from 'axios';

function Products({ currentUser , actionAddBuy , buys , history}) {
    const { group } = useParams();
    const [productsArr, setProductsArr] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:4040/product/getAllProducts`)
            .then(res => {
                console.log('axios');
                setProductsArr([])
                setProductsArr(items => items.concat(res.data));
                console.log(res.data);
            })
            .catch(err => {
                history.push(`/errorAlert/${err}`)
               })
    },[])

    return (
        <div className="row m-0 p-5 justify-content-center col-11">
            {productsArr.map((item, index) => (
                item.group == group  ? <Cardproduct key={index} product={item} actionAddBuy={actionAddBuy} currentUser={currentUser} buys={buys}/> : ''
            )
            )}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        currentUser: state.user.currentUser,
        buys: state.buy
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        actionAddBuy: (buyObj) => dispatch(actions.addBuyToCart(buyObj))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Products));
