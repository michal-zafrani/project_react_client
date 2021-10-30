import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Table, Image, Button, ButtonGroup } from 'react-bootstrap';
import * as Icon from 'react-bootstrap-icons';
import { actions } from '../../redux/actions/Actions';
import { withRouter , Link } from 'react-router-dom'


function ShoppingCart({ buys, user, setCount, deleteBuy , history}) {

    useEffect(() => {
        if(!(user._id)) {
            history.push('/logIn')
        }
    }, [])

    return (
        <div className="col-11 col-md-6 about-class p-3">
            <Table className="text-white">
                <tbody>
                    {buys.length > 0 && buys.find(x => x.user._id == user._id).products
                        .map((buy, index) => (
                            <tr key={buy.product._id}>
                                <td>{index + 1}</td>
                                <td><Image src={`/img/${buy.product.img}`} style={{ height: '80px' }} /></td>
                                <td>{buy.product.name}</td>
                                <td>{buy.product.price}₪</td>
                                <td>
                                    <ButtonGroup aria-label="Basic example">
                                        <Button variant="secondary" onClick={() => setCount({ idUser: user._id , idProduct: buy.product._id , price: buy.product.price, setCountfor: (buy.count + 1)})}><Icon.Plus /></Button>
                                        <span className="p-2">{buy.count}</span>
                                        <Button variant="secondary" onClick={() => setCount({ idUser: user._id , idProduct: buy.product._id , price: buy.product.price , setCountfor: (buy.count - 1)})} disabled={buy.count == 1 ? true : false}><Icon.Dash /></Button>
                                    </ButtonGroup>
                                </td>
                                <td>
                                    <Button onClick={() => deleteBuy({ product: buy.product , idUser: user._id  })}>X</Button>
                                </td>
                                <td>{buy.sum}₪</td>
                            </tr>
                        ))}
                </tbody>
            </Table>
            {buys.length > 0 ?<div>
                 <h4 className="text-center">sum to pay: {buys.find(x => x.user._id == user._id).sumTotal} ₪</h4> 
                 <Link to="/payment" className="btn btn-succses mx-auto">NEXT PAYMENT</Link>
                 </div>
            : <p>Your cart empty</p>}
            
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        buys: state.buy,
        user: state.user.currentUser,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setCount: (obj) => dispatch(actions.setCount(obj)),
        deleteBuy: (index) => dispatch(actions.deleteBuy(index))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ShoppingCart))
