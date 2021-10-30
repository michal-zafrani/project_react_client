import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux';
import { Table, Image } from 'react-bootstrap';
import { saveBuy } from '../service';
import { actions } from '../../redux/actions/Actions'
import { withRouter } from 'react-router-dom';

function Payment({ user, buys ,deleteBuyObject ,history }) {
    const [flag, setFlag] = useState(false)
    const a = buys.find(buy => buy.user._id === user._id);

    const funSaveBuy = () => {
        const newBuy = {
            username: user.name,
            userId: user._id,
            sumproducts: a.sumProducts,
            pricetotal: a.sumTotal
        }
        saveBuy(newBuy)
            .then((res) => {
                setFlag(false)
                deleteBuyObject(user._id);
                console.log(res);
                history.push('/');
            })
            .catch((err) => console.log(err))
    }

    useEffect(() => {
        alert('Do you want to go to the payment page?');
        setFlag(true);
    }, [])
    return (
        <>
            {flag ? <div className="col-11 col-md-7 mx-auto border rounded bg-white p-5">
                <Table>
                    <thead>
                        <tr>
                            <th>product</th>
                            <th>image</th>
                            <th>price</th>
                            <th>amount</th>
                            <th>sum</th>
                        </tr>
                    </thead>
                    <tbody>
                        {a.products.map((pro) => (
                            <tr key={`PAY${pro.product._id}`}>
                                <td>{pro.product.name}</td>
                                <td><Image src={`/img/${pro.product.img}`} style={{ height: '80px' }} /></td>
                                <td>{pro.product.price}₪</td>
                                <td>{pro.count}</td>
                                <td>{pro.sum}₪</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
                <div>
                    <h3 className="text-center text-body">Total payment: {a.sumTotal} ₪</h3>
                    <button className="btn btn-succses mx-auto" onClick={funSaveBuy}>PAYMENT</button>
                </div>
            </div>
                : <p></p>}
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        user: state.user.currentUser,
        buys: state.buy
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteBuyObject: (userId) => dispatch(actions.deleteBuyObject(userId)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Payment))
